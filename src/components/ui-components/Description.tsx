import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Text } from "native-base";

const Description = () => {
  return (
    <Column space='4' w='100%' bg='white'>
      <Column>
        <Text bold fontSize='2xl'>Wandering Albatross</Text>
        <Text italic>Diomedea exulans</Text>
      </Column>
      <Text>
        Wandering Albatross Diomedea exulans has most recently been assessed for
        The IUCN Red List of Threatened Species in 2018. Diomedea exulans is
        listed as Vulnerable under criteria A4bd.
      </Text>
    </Column>
  );
};

export default Description;

const styles = StyleSheet.create({});
