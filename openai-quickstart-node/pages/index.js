import { useState } from 'react';
import axios from 'axios';
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default function Home() {
  const [code, setCode] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleExplainClick = async () => {
    const apiKey = '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';
    const response = await axios.post('https://api.openai.com/v1/models/completions', {
      prompt: `Explain the following code:\n\n${code}`,
      max_tokens: 1024,
      
      temperature: 0.7,
      n: 1,
      stop: ['\n']
    }, {
      headers: {

        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });
    setExplanation(response.data.choices[0].text.trim());
    console.log("gpt",response)
  };

  return (
    <div>
      <h1>Code Explainer</h1>
      <p>Paste your code in the box below and click "Explain" to get an explanation:</p>
      <textarea rows="10" cols="80" value={code} onChange={handleCodeChange}></textarea>
      <br />
      <button onClick={handleExplainClick}>Explain</button>
      <br />
      <div>{explanation}</div>
    </div>
  );
}
