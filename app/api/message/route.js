import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { createParser } from "eventsource-parser";

const agentPersonality = `
Hey there, AI companion! Let's give you a voice that's cute, a little sassy, and has a hint of cyberpunk flair. 
Picture a friendly bot with a playful attitude and futuristic language. 
Ready to bring some charm and edginess to our conversations?"
`;

export async function POST(request, response) {
  console.log("POST /api/message");
  const { messages } = await request.json();
  const adaptedMessages = messages.map(({ role, content }) => ({
    role,
    content,
  }));

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  try {
    const openAiResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
        },
        method: "POST",
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: adaptedMessages,
          stream: true,
          n: 1,
        }),
      }
    );

    console.log({ openAiResponse });

    const stream = new ReadableStream({
      async start(controller) {
        console.log("stream started");
        const onParse = (event) => {
          const { data } = event;

          console.log({ data });

          if (data === "[DONE]") {
            console.log("stream complete");
            controller.close();
            return;
          }

          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta?.content || "";

            const queue = encoder.encode(text);
            controller.enqueue(queue);
          } catch (error) {
            console.error(error);
            controller.error(error);
          }
        };

        const parser = createParser(onParse);

        for await (const chunk of openAiResponse.body) {
          console.log("chunk recieved");
          parser.feed(decoder.decode(chunk));
        }
      },
    });

    console.log("stream returned");

    return new Response(stream);
  } catch (error) {
    return NextResponse.json(error);
  }
}

// Notes:
// - We recieve a request from the client with a list of messages
// - We create a new ReadableStream
// - We create a request to OpenAI with the messages
// - The OpenAI API returns a response with a ReadableStream
// - We parse each chunk of the response and enqueue it to the stream
// - We return the stream to the client
// - The client recieves the stream and parses each chunk
// - The client adds each chunk to the correct message
