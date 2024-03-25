import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Text } from "native-base";

const Habitat = () => {
  return (
    <Column w="100%" p="3" bg="white">
      <Text bold fontSize="md">
        HABITAT AND ECOLOGY
      </Text>
      <Text fontSize="lg" color="#08B364" bold>
        Grassland, Marine Neritic, Marine Oceanic
      </Text>
    </Column>
  );
};

export default Habitat;

const styles = StyleSheet.create({});
