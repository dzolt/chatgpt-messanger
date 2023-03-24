import openai from "./chatgpt";

const gptQuery = async (prompt: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0.5,
      presence_penalty: 0.3,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGTP was unable to respond to your question. Please try again later. Error: ${err.message}`
    );

  return res;
};

export default gptQuery;
