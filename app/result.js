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
  backgroundColor: "#F5F7FB",
  padding: 20,
},

image: {
  width: "100%",
  height: 260,
  borderRadius: 20,
  resizeMode: "cover",
  marginTop: 20,
  elevation: 6,
},

title: {
  fontSize: 24,
  fontWeight: "700",
  color: "#5B3FA3",
  marginVertical: 20,
  alignSelf: "center",
},

card: {
  backgroundColor: "#FFFFFF",
  borderRadius: 20,
  padding: 20,
  elevation: 5,
},

resultText: {
  fontSize: 16,
  lineHeight: 28,
  color: "#444",
},
});