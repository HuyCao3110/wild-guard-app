import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "./TabNav";
import ErrorOverlay from "../components/ErrorOverlay";
import { useAppSelector } from "../store";
import Chat from "../screens/Chat";
import Filter from "../screens/root/Filter";
import AnimalDetails from "../screens/root/AnimalDetails";
import NewsDetail from "../screens/root/NewsDetail";
import ChooseAnswer from "../screens/root/ChooseAnswer";
import ChooseImage from "../screens/root/ChooseImage";
import FillWord from "../screens/root/FillWord";

const Stack = createNativeStackNavigator();

const Root = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <>
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Chat"
        >
          {!user && <Stack.Screen name="Auth" component={AuthStack} />}
          {user && <Stack.Screen name="TabNav" component={TabNav} />}
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="AnimalDetails" component={AnimalDetails} />
          <Stack.Screen name="NewsDetail" component={NewsDetail}/>
          <Stack.Screen name="ChooseAnswer" component={ChooseAnswer}/>
          <Stack.Screen name="ChooseImage" component={ChooseImage}/>
          <Stack.Screen name="FillWord" component={FillWord}/>


        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
