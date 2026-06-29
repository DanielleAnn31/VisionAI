import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5B3FA3" />
        <Text style={styles.loadingText}>Analyzing image...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.image} />

      <Text style={styles.title}>AI Analysis Result</Text>

      <View style={styles.card}>
        <ScrollView>
          <Text style={styles.resultText}>{resultText}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: "#5A6472",
  },

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

  resultText: {
    fontSize: 16,
    lineHeight: 24,
  },
});