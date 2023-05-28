export default async (messages) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  console.log({ messages });

  try {
    const response = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });

    const reader = response.body.getReader();

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        console.log("stream complete");
        break;
      }

      const text = decoder.decode(value);
      console.log({ dean: text });
    }
  } catch (error) {
    console.error(error);
  }
};
