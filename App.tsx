import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Rsq from "./components/RPS";
import ReadPDF from "./components/Read";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <ReadPDF />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
