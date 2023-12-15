import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.AI_APi_KEY as string,
});

async function askAI(content: any) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: ` ${content}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const response = completion.choices[0].message.content;

  return response;
}

export default askAI;
