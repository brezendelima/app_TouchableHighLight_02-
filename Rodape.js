import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Rodape() {
  return (
    <View style={styles.rodape}>
      <Text style={styles.textoRodape}>Bruno Rezende de Lima</Text>
      <Text style={styles.textoRodape}>24/04/2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  textoRodape: {
    fontSize: 14
  }
});