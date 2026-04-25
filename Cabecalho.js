import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Cabecalho() {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.tituloTopo}>DSV - MOBILE</Text>

      <View style={styles.boxImagem}>
        <Image
          source={require("../imagem.png")}
          style={styles.imagem}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    alignItems: "center",
    paddingTop: 40
  },
  tituloTopo: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20
  },
  boxImagem: {
    width: 150,
    height: 90,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imagem: {
    width: "100%",
    height: "100%"
  }
});