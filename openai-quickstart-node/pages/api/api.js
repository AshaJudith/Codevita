import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  
  
const model_engine = 'davinci-codex';

const openai_ = create({
    apiKey: api_key,
});

export async function getGptResponse(prompt) {
    const response = await request({
        method: 'POST',
        url: '/engines/' + model_engine + '/completions',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            prompt: prompt,
            max_tokens: 50,
            n: 1,
            stop: ['\n'],
        },
    });

    return response.data.choices[0].text.trim();
}
