const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const { OpenAI } = require("langchain/llms/openai");
const llm = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

async function getLLMPerdictResult() {
  const result = await llm.predict(
    "What would be a good company name for a company that makes colorful socks?"
  );
  console.log(result);
}

getLLMPerdictResult();