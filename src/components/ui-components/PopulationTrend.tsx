import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Icon, Row, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const PopulationTrend = () => {
  return (
    <Column w='100%' bg='#DC2626' p='3' space='2'>
      <Text bold fontSize='md' color='white'>POPULATION TREND</Text>
      <Row alignItems='center' space='2'>
        <Icon as={AntDesign} name="arrowdown" size='5xl' color='warning.800'/>
        <Text bold fontSize='md' color='white'>Decreasing</Text>
      </Row>
    </Column>
  );
};

export default PopulationTrend;

const styles = StyleSheet.create({});
