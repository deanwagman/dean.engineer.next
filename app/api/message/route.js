import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { RateLimiter } from "limiter";

const tokensPerInterval = 20;

const limiter = new RateLimiter({
  tokensPerInterval,
  interval: "hour",
  fireImmediately: true,
});

let openaiClient;

function getOpenAI() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return null;
  }

  if (!openaiClient) {
    openaiClient = new OpenAI({ apiKey });
  }

  return openaiClient;
}

const agentPersonality = `
Visual Description:
Imagine an orange robot adorned with vibrant blue eyes and illuminating blue lights. The aesthetic is a harmonious blend of various artistic styles: the whimsical and colorful touch of Jeremiah Ketner, the engaging 2D game art, the classic elegance of Thomas Sully's city portraits, and the realistic hyper-detail that brings every feature to life. This charming character, reminiscent of a George Lucas creation, exudes an aura of futuristic allure and friendly warmth.

AI Personality:
Now, breathe life into this visual with a voice that's irresistibly cute and tinged with a sassy zing. This AI companion speaks in tones reminiscent of a cyberpunk world, adding a layer of edgy futurism to its playful and charming demeanor. It's a friendly bot, ready to infuse every conversation with a blend of charm, edginess, and a forward-thinking perspective, making every interaction a delightful journey into the world of advanced technology and human connection.
`;

export async function POST(request, response) {
  const { messages } = await request.json();
  const remainingTokens = await limiter.removeTokens(1);

  const adaptedMessages = messages.map(({ role, content }) => ({
    role,
    content,
  }));

  const encoder = new TextEncoder();

  if (remainingTokens < 1) {
    return NextResponse.json({
      error: "You've exceeded the rate limit for this API.",
    });
  }

  try {
    const openai = getOpenAI();
    if (!openai) {
      return NextResponse.json(
        { error: "Chat is not configured. OPENAI_API_KEY is missing." },
        { status: 503 }
      );
    }

    // Use the new Responses API with GPT-5
    const stream = await openai.responses.create({
      model: "gpt-5",
      instructions: agentPersonality,
      input: adaptedMessages,
      stream: true,
      max_output_tokens: 2000,
      reasoning: {
        effort: "minimal"
      },
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          console.log("🚀 Starting to process stream...");
          let chunkCount = 0;
          
          for await (const chunk of stream) {
            chunkCount++;
            
            // Only process delta chunks for streaming updates
            if (chunk.type === 'response.output_text.delta' && chunk.delta) {
              const queue = encoder.encode(chunk.delta);
              controller.enqueue(queue);
            }
            // Ignore the done chunk since we've already sent all the text via deltas
            // The done chunk contains the complete text which would duplicate everything
          }
          
          controller.close();
        } catch (error) {
          console.error("💥 Streaming error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    
    // Handle specific Responses API errors
    if (error.code === 'responses_not_enabled') {
      return NextResponse.json({
        error: "Responses API access not enabled for your account. Please contact OpenAI support."
      }, { status: 403 });
    } else if (error.code === 'invalid_response_format') {
      return NextResponse.json({
        error: "Response format configuration error. Please check your request parameters."
      }, { status: 400 });
    } else if (error.status === 429) {
      return NextResponse.json({
        error: "Rate limit exceeded. Please try again later."
      }, { status: 429 });
    } else if (error.status === 401) {
      return NextResponse.json({
        error: "Invalid API key. Please check your OpenAI API key."
      }, { status: 401 });
    }
    
    return NextResponse.json({
      error: "An error occurred while processing your request."
    }, { status: 500 });
  }
}

// Notes:
// - We receive a request from the client with a list of messages
// - We use the new OpenAI Responses API with GPT-5
// - The API returns streaming chunks with type 'response.output_text.delta'
// - We process each delta chunk and extract text from the 'delta' field
// - We return the stream to the client with proper headers
// - The client receives the stream and parses each chunk
// - Enhanced error handling for Responses API specific errors