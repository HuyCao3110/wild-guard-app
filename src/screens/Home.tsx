import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
import { Button, Center } from "native-base";
import TopNavigation from "../components/ui-components/TopNavigation";
import SearchBox from "../components/ui-components/SearchBox";
import AnimalCard from "../components/ui-components/AnimalCard";
import SpeciesCard from "../components/ui-components/SpeciesCard";
import Description from "../components/ui-components/Description";
import RLAssessment from "../components/ui-components/RLAssessment";

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <TopNavigation title="WildGuard"/>
      <Center flex={1}>
        {/* <Button onPress={() => dispatch(removeUser())}>
        Logout
      </Button> */}
      <RLAssessment/>
      </Center>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
