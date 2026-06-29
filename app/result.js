result.js

import { useLocalSearchParams } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ResultScreen() {
  const { result, photo } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.image} />

      <Text style={styles.title}>AI Analysis Result</Text>

      <View style={styles.card}>
        <ScrollView>
          <Text style={styles.result}>
            {result}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginTop: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },

  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#eeeeee",
    borderRadius: 15,
    width: "100%",
    maxHeight: 300,
  },

  result: {
    fontSize: 16,
    lineHeight: 24,
  },
});