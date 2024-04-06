import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";
import TopNavigation from "../components/ui-components/information/TopNavigation";
import GameTag from "../components/ui-components/others/GameTag";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabsParams, RootStackParams } from "../navigations/config";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type Props = {} & CompositeScreenProps<
  BottomTabScreenProps<BottomTabsParams>,
  NativeStackScreenProps<RootStackParams>
>;

const Games = ({ navigation }: Props) => {
  function toChooseAnswer() {
    navigation.navigate("ChooseAnswer");
  }

  function toChooseImage() {
    navigation.navigate("ChooseImage");
  }

  return (
    <>
      <TopNavigation title="Games" />
      <Box bg="white" flex="1" px="5" pt="10">
        <GameTag icon="image" goTo={toChooseAnswer}>
          Choose the correct answer
        </GameTag>
        <GameTag icon="images" goTo={toChooseImage}>Choose the right image</GameTag>
        <GameTag icon="pencil">Fill in words</GameTag>
        <GameTag icon="magnet">Matching pictures</GameTag>
      </Box>
    </>
  );
};

export default Games;

const styles = StyleSheet.create({});
