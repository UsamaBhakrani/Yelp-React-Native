import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import ResultsDetails from "./ResultsDetails";
import { useNavigation } from "@react-navigation/native";

const ResultsList = ({ header, results }) => {
  const { navigate } = useNavigation();
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
            <TouchableOpacity
              onPress={() =>
                navigate("ResultsShow", { id: "Hello", name: "Jello" })
              }
            >
              <ResultsDetails {...item} />
            </TouchableOpacity>
          );
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
