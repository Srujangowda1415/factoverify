import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:5000"; // Flask Backend

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/process`, {
      text: message,
      files: [],
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    return { result: "Error processing request", sources: [] };
  }
};
