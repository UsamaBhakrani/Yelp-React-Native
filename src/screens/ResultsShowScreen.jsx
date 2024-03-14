import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import api from "../../api";

const ResultsShowScreen = ({
  route: {
    params: { id },
  },
}) => {
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await api.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{result?.name}</Text>
      <FlatList
        data={result?.photos}
        keyExtractor={(result) => result?.id}
        renderItem={({ item }) => {
          return <Image style={styles.image} src={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 250,
    width: 250,
    margin: 5,
    alignSelf: "center",
  },
});
export default ResultsShowScreen;
