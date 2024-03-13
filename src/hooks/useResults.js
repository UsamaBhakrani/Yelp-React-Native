import { useEffect, useState } from "react";
import api from "../../api";

export const useResults = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (initialTerm) => {
    try {
      const response = await api.get("/search", {
        params: {
          limit: 50,
          term: initialTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something Went Wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return { results, error, searchApi };
};
