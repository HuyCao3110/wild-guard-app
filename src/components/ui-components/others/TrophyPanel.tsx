import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Column, Row } from "native-base";
import GameTrophy from "./GameTrophy";

const TrophyPanel = () => {
  return (
    <Column space="4">
      <Row space="4">
        <Box flex="1">
          <GameTrophy>Choose the right answer</GameTrophy>
        </Box>
        <Box flex="1">
          <GameTrophy>Choose the right image</GameTrophy>
        </Box>
      </Row>
      <Row space="4">
        <Box flex="1">
          <GameTrophy>Fill in words</GameTrophy>
        </Box>
        <Box flex="1">
          <GameTrophy>Matching picture</GameTrophy>
        </Box>
      </Row>
    </Column>
  );
};

export default TrophyPanel;

const styles = StyleSheet.create({});
