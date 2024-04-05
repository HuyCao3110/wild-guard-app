import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewsStackParams } from "./config";
import Home from "../screens/Home";
import AnimalDetails from "../screens/root/AnimalDetails";
import Filter from "../screens/root/Filter";
import News from "../screens/News";
import NewsDetail from "../components/ui-components/others/NewsDetail";

const Stack = createNativeStackNavigator<NewsStackParams>();

const NewsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="News"
    >
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  );
};

export default NewsStack;
