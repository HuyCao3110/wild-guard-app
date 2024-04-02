import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
import { Button, Center } from "native-base";
import TopNavigation from "../components/ui-components/information/TopNavigation";

import NewsCard from "../components/ui-components/others/NewsCard";
import Game from "../components/ui-components/others/Game";

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <TopNavigation title="WildGuard" />
      <Center flex={1}>
        {/* <Button onPress={() => dispatch(removeUser())}>
        Logout
      </Button> */}
        <Game />
      </Center>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
