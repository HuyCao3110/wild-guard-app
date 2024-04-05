import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Games from "../screens/Games";
import News from "../screens/News";
import { Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import NewsStack from "./NewsStack";
// import { BottomTabsParams } from "./types";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              color={focused ? "#08B364" : "#A3A3A3"}
              size={25}
            />
          ),
          tabBarActiveTintColor: "#08B364",
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="newspaper"
              color={focused ? "#08B364" : "#A3A3A3"}
              size={25}
            />
          ),
          tabBarActiveTintColor: "#08B364",
        }}
      />
      <Tab.Screen
        name="Games"
        component={Games}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="game-controller"
              color={focused ? "#08B364" : "#A3A3A3"}
              size={25}
            />
          ),
          tabBarActiveTintColor: "#08B364",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
