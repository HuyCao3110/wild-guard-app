import { StyleSheet, View } from "react-native";
import React from "react";
import { Checkbox, Column, Icon, Row, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
import TaxonomyCheckbox from "./TaxonomyCheckbox";

const TaxonomyCheck = () => {
  return (
    <Column space="2" w="100%" bg="white" p='3'>
      <Row alignItems="center" space="2">
        <Icon as={Feather} name="chevron-down" size="md" color="black" />
        <Text bold fontSize="lg">
          Taxonomy
        </Text>
      </Row>
      <Checkbox.Group>
        <TaxonomyCheckbox>Fungikingdom</TaxonomyCheckbox>
        <TaxonomyCheckbox>Plantaekingdom</TaxonomyCheckbox>
        <TaxonomyCheckbox>Animaliakingdom</TaxonomyCheckbox>
        <TaxonomyCheckbox>Ochrophytaphylum</TaxonomyCheckbox>
      </Checkbox.Group>
    </Column>
  );
};

export default TaxonomyCheck;

const styles = StyleSheet.create({});
