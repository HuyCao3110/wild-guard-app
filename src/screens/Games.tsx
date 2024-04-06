import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Game from "../components/ui-components/others/Game";
import { Box } from "native-base";
import TopNavigation from "../components/ui-components/information/TopNavigation";
import GameTag from "../components/ui-components/others/GameTag";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GameStackParams } from "../navigations/config";

type Props = {} & NativeStackScreenProps<GameStackParams>;

const Games = ({ navigation }: Props) => {

  function toChooseAnswer(){
    navigation.navigate('ChooseAnswer')
  }

  return (
    <>
      <TopNavigation title="Games" />
      <Box bg="white" flex="1" px="5" pt="10">
        <GameTag icon="image" goTo={toChooseAnswer}>Choose the correct answer</GameTag>
        <GameTag icon="images">Choose the right image</GameTag>
        <GameTag icon="pencil">Fill in words</GameTag>
        <GameTag icon="magnet">Matching pictures</GameTag>
      </Box>
    </>
  );
};

export default Games;

const styles = StyleSheet.create({});
