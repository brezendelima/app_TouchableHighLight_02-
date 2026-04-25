import React, { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export default function Corpo() {

  const [enunciado, setEnunciado] = useState("Clique no Botão para trocar a cor do fundo da tela!");
  const [descricao, setDescricao] = useState("");
  const [corFundo, setCorFundo] = useState("white");

  function alteraState() {

    const frases = [
      "Que a Força esteja com você.",
      "Dobby não tem mestre! Dobby é um elfo livre!",
      "Um mago nunca se atrasa, nem se adianta, ele chega exatamente quando pretende chegar.",
      "Vida longa e próspera.",
      "Com grandes poderes vêm grandes responsabilidades."
    ];

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

    if (corFundo === "white") {
      setEnunciado("A cor do fundo do Componente Conteudo foi trocada para cinza. Clique novamente para voltar ao estado inicial.");
      setDescricao(fraseAleatoria);
      setCorFundo("gray");
    } else {
      setEnunciado("Clique no Botão para trocar a cor do fundo da tela!");
      setDescricao("");
      setCorFundo("white");
    }
  }

  return (
    <View style={[styles.corpo, { backgroundColor: corFundo }]}>
      <Text style={styles.titulo}>UseState</Text>

      <Text style={styles.texto}>{enunciado}</Text>

      <TouchableHighlight
        onPress={alteraState}
        style={styles.botao}
      >
        <Text style={styles.botaoTexto}>CLIQUE AQUI</Text>
      </TouchableHighlight>

      <Text style={styles.texto}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  corpo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 10
  },
  titulo: {
    fontSize: 24,
    color: "darkred",
    marginBottom: 20
  },
  texto: {
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20
  },
  botao: {
    backgroundColor: "darkred",
    padding: 15,
    borderRadius: 20,
    marginBottom: 20
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold"
  }
});