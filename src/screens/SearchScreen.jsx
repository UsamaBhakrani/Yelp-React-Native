import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useResults } from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { results, error, searchApi } = useResults();

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
      <ResultsList header="Cost Effective" />
      <ResultsList header="Bit Pricier" />
      <ResultsList header="Big Spender!" />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {},
});

export default SearchScreen;
