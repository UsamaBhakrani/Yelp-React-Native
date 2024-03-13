import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import api from "../../api";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (initialTerm) => {
    try {
      const response = await api.get("/search", {
        params: {
          limit: 50,
          term: initialTerm || searchTerm,
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

  return (
    <View style={styles.search}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      {error ? (
        <Text>{error}</Text>
      ) : (
        <Text>We have found {results.length} results</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  search: {},
});

export default SearchScreen;
