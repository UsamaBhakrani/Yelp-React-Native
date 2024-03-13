import axios from "axios";

const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const apiUrl = process.env.EXPO_PUBLIC_API_URL;


export default axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
