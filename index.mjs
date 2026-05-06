import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

// 1. Initialize model
const model = new ChatOpenAI({
  temperature: 0.7,
  apiKey: ""
});

// 2. Create prompt template
const prompt = new PromptTemplate({
  template: `
You are a health assistant AI.

User data:
- Heart Rate: {hr}
- Voice Stress Level: {stress}
- Movement Activity: {motion}

Analyze the condition and give simple advice.
`,
  inputVariables: ["hr", "stress", "motion"],
});

// 3. Simulated sensor data
const data = {
  hr: 110,
  stress: "high",
  motion: "low",
};

// 4. Run AI
async function runAnalysis() {
  const formattedPrompt = await prompt.format(data);
  const response = await model.invoke(formattedPrompt);

  console.log(response.content);
}

runAnalysis();