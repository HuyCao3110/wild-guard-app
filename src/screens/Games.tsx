import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Game from "../components/ui-components/others/Game";
import { Box } from "native-base";
import TopNavigation from "../components/ui-components/information/TopNavigation";

const Games = () => {
  return (
    <>
      <TopNavigation title="Games" />
      <Box bg="white" flex="1" px="3" pt="10">
        <Game />
      </Box>
    </>
  );
};

export default Games;

const styles = StyleSheet.create({});
