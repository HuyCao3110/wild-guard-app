import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
import { Button, Center } from "native-base";
import TopNavigation from "../components/ui-components/TopNavigation";
import SearchBox from "../components/ui-components/SearchBox";
import AnimalCard from "../components/ui-components/AnimalCard";

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <TopNavigation title="WildGuard"/>
      <Center flex={1}>
        {/* <Button onPress={() => dispatch(removeUser())}>
        Logout
      </Button> */}
      <AnimalCard/>
      </Center>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
