import { FlatList, StyleSheet, Text, View } from "react-native";
import ResultsDetails from "./ResultsDetails";

const ResultsList = ({ header, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{header}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetails {...item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {},
});

export default ResultsList;
