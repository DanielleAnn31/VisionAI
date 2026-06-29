import { useLocalSearchParams } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ResultScreen() {
  const params = useLocalSearchParams();

  const resultText = params.result;
  const photo = params.photo;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Image source={{ uri: photo as string }} style={styles.image} />

      <Text style={styles.title}>AI Analysis Result</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Analysis</Text>

        <Text style={styles.resultText}>
          {resultText}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  content: {
    alignItems: "center",
    padding: 20,
    paddingBottom: 40,
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2A44",
    marginBottom: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E5BBA",
    marginBottom: 12,
  },

  resultText: {
    fontSize: 16,
    lineHeight: 26,
    color: "#333",
  },
});