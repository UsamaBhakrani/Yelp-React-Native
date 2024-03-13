import { Text, View, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, setSearchTerm, onTermSubmit }) => {
  return (
    <View style={styles.search}>
      <AntDesign style={styles.icon} name="search1" size={36} color="black" />
      <TextInput
        value={searchTerm}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        onChangeText={setSearchTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: "lightgray",
    borderRadius: 5,
    margin: 15,
    height: 50,
    flexDirection: "row",
  },
  input: {
    fontSize: 30,
    flex: 1,
    paddingTop: 5,
  },
  icon: {
    marginVertical: 8,
    paddingHorizontal: 5,
  },
});

export default SearchBar;
