import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GameStackParams } from "./config";
import Home from "../screens/Home";
import AnimalDetails from "../screens/root/AnimalDetails";
import Filter from "../screens/root/Filter";
import News from "../screens/News";
import NewsDetail from "../screens/root/NewsDetail";
import Game from "../components/ui-components/others/Game";
import ChooseAnswer from "../screens/root/ChooseAnswer";
import Games from "../screens/Games";

const Stack = createNativeStackNavigator<GameStackParams>();

const GameStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="GameScreen"
    >
      <Stack.Screen name="GameScreen" component={Games} />
      <Stack.Screen name="ChooseAnswer" component={ChooseAnswer} />
    </Stack.Navigator>
  );
};

export default GameStack;
