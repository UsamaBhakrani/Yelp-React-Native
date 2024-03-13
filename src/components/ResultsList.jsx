import { FlatList, StyleSheet, Text, View } from "react-native";

const ResultsList = ({ header }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{header}</Text>
      <FlatList style={styles.list} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {},
});

export default ResultsList;
