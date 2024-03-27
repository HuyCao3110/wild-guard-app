import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
import { Button, Center } from "native-base";
import TopNavigation from "../components/ui-components/information/TopNavigation";
import MatureIndividuals from "../components/ui-components/information/MatureIndividuals";
import Habitat from "../components/ui-components/information/Habitat";
import Taxonomy from "../components/ui-components/information/Taxonomy";
import AssessmentInfo from "../components/ui-components/information/AssessmentInfo";
import GeographicRange from "../components/ui-components/information/GeographicRange";
import Population from "../components/ui-components/information/Population";
import ExtendedEcology from "../components/ui-components/information/ExtendedEcology";
import Threats from "../components/ui-components/information/Threats";
import UseTrade from "../components/ui-components/information/UseTrade";
import Conservation from "../components/ui-components/information/Conservation";
import TaxonomyCheck from "../components/ui-components/others/TaxonomyCheck";
import Category from "../components/ui-components/others/Category";

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <TopNavigation title="WildGuard" />
      <Center flex={1}>
        {/* <Button onPress={() => dispatch(removeUser())}>
        Logout
      </Button> */}
        <Category />
      </Center>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
