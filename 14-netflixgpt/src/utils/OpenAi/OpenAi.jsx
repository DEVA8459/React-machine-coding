import OpenAI from 'openai';



const client = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: import.meta.env.VITE_API_KEY,
    defaultHeaders: {
      'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
      'X-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
    },
    dangerouslyAllowBrowser: true
  });
export default client