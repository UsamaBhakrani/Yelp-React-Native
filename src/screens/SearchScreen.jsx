import { StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useResults } from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { results, error, searchApi } = useResults();

  const filterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      <ScrollView>
        <ResultsList header="Cost Effective" results={filterByPrice("$")} />
        <ResultsList header="Bit Pricier" results={filterByPrice("$$")} />
        <ResultsList header="Big Spender!" results={filterByPrice("$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
