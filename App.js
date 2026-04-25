import React from "react";
import { View, StyleSheet } from "react-native";

import Cabecalho from "./src/components/Cabecalho";
import Corpo from "./src/components/Corpo";
import Rodape from "./src/components/Rodape";

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Corpo />
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "space-between"
  }
});