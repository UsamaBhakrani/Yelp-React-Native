import { FlatList, Image, StyleSheet, Text, View } from "react-native";

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
          return (
            <View style={styles.card}>
              {/* <Image source={item.image_url} /> */}
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
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
  card: {
    height: 150,
    width: 220,
    borderRadius: 10,
    backgroundColor: "coral",
    margin: 5,
  },
});

export default ResultsList;
