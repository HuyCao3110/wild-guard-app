import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Center, Column, Image, ScrollView } from "native-base";
import TopNavigation from "../../components/ui-components/information/TopNavigation";
import Description from "../../components/ui-components/information/Description";
import RLAssessment from "../../components/ui-components/information/RLAssessment";
import PopulationTrend from "../../components/ui-components/information/PopulationTrend";
import MatureIndividuals from "../../components/ui-components/information/MatureIndividuals";
import Habitat from "../../components/ui-components/information/Habitat";
import Taxonomy from "../../components/ui-components/information/Taxonomy";
import AssessmentInfo from "../../components/ui-components/information/AssessmentInfo";
import GeographicRange from "../../components/ui-components/information/GeographicRange";
import Population from "../../components/ui-components/information/Population";
import ExtendedEcology from "../../components/ui-components/information/ExtendedEcology";
import Threats from "../../components/ui-components/information/Threats";
import UseTrade from "../../components/ui-components/information/UseTrade";
import Conservation from "../../components/ui-components/information/Conservation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<HomeStackParams>

const AnimalDetails = ({navigation}:Props) => {
  return (
    <>
      <TopNavigation hasBack goBack={()=> {navigation.goBack()}} />
      <ScrollView>
        <Column bg="white" pt='7'>
          <Center>
            <Image alt="" source={require("../../../assets/albatross.png")} />
          </Center>
          <Description />
          <RLAssessment/>
          <PopulationTrend/>
          <MatureIndividuals/>
          <Habitat/>
          <Taxonomy/>
          <AssessmentInfo/>
          <GeographicRange/>
          <Population/>
          <ExtendedEcology/>
          <Threats/>
          <UseTrade/>
          <Conservation/>
        </Column>
      </ScrollView>
    </>
  );
};

export default AnimalDetails;

const styles = StyleSheet.create({});
