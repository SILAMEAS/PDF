import { StyleSheet, Text, View, Button } from "react-native";
import PDFReader from "@hashiprobr/expo-pdf-reader";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import React from "react";

export default function Rsq() {
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;
  const print = async () => {
    await Print.printAsync({
      html: html,
    });
  };
  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "Rsqlication/pdf" });
  };
  const selectPrinter = async () => {
    const printer: any = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };
  return (
    <View style={styles.container}>
      <Text>
        {/* <PDFReader source={require("../view-pdf/assets/radius.pdf")} /> */}
        <Button title="Add" onPress={printToFile} />
        <Button title="Show" onPress={selectPrinter} />
        <Button title="print" onPress={print} />
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
