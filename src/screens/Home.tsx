import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
import { Button, Center } from "native-base";
import TopNavigation from "../components/ui-components/TopNavigation";
import MatureIndividuals from "../components/ui-components/MatureIndividuals";
import Habitat from "../components/ui-components/Habitat";
import Taxonomy from "../components/ui-components/Taxonomy";
import AssessmentInfo from "../components/ui-components/AssessmentInfo";
import GeographicRange from "../components/ui-components/GeographicRange";

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <TopNavigation title="WildGuard"/>
      <Center flex={1}>
        {/* <Button onPress={() => dispatch(removeUser())}>
        Logout
      </Button> */}
      <GeographicRange/>
      </Center>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
