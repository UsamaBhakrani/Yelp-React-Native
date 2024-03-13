import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import api from "../../api";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    try {
      const response = await api.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.search}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {},
});

export default SearchScreen;
