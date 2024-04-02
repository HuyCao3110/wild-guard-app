import { StyleSheet, View } from "react-native";
import React from "react";
import { Icon, Text, Row, Column } from "native-base";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import GameTag from "./GameTag";

const Game = () => {
  return (
    <Column bg="white" width="100%" p='3'>
      
      <GameTag icon="image">Choose the correct answer</GameTag>
      <GameTag icon="images">Choose the right image</GameTag>
      <GameTag icon="pencil">Fill in words</GameTag>
      <GameTag icon="magnet">Matching pictures</GameTag>
    </Column>
  );
};

export default Game;

const styles = StyleSheet.create({});
