import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import ReadPDF from "./src/mobile/Read";
import ReadPDF_w from "./src/mobile/Read";
// import Rsq from "./src/mobile/RPS";

export default function App() {
  const isWeb = Platform.OS === "web";
  return (
    <View style={styles.container}>{isWeb ? <ReadPDF_w /> : <ReadPDF />}</View>
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
