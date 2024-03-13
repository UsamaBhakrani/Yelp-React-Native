import { StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View style={styles.search}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(newTerm) => setSearchTerm(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {},
});

export default SearchScreen;
