// API service to connect the frontend chatbot to the deployed backend API
// This connects to the backend deployed on Hugging Face Spaces

// Backend URL for the deployed backend on Hugging Face Spaces
const BACKEND_URL = 'https://mussawirsoomro5-physical-ai-and-humanoid.hf.space/chat';

// Chat API calls
export const chatAPI = {
  sendMessage: async (message) => {
    try {
      // Making a request to the backend API endpoint
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
      }

      const data = await response.json();
      // The backend returns { response: "<AI_response_text>" }
      return data.response; // Return only the response text as expected by the UI
    } catch (error) {
      console.error('Error communicating with backend API:', error);
      throw error;
    }
  }
};