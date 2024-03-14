import { StyleSheet, Text, View, Image } from "react-native";

const ResultsDetails = ({ ...item }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} src={item.image_url} />
      <Text style={styles.cardText}>{item.name}</Text>
      <View style={styles.rating}>
        <Text>{item.rating} Stars</Text>
        <Text>{item.review_count} Reviews</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 200,
    borderRadius: 10,
    backgroundColor: "#ffffff00",
    borderWidth: 1,
    margin: 5,
  },
  image: {
    borderRadius: 10,
    height: 100,
    width: "auto",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "700",
    padding: 3,
  },
  rating: {
    flexDirection: "row",
    color: "gray",
    padding: 3,
  },
});

export default ResultsDetails;
