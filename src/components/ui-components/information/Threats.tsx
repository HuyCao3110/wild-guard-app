import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Icon, List, Row, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const Threats = () => {
  return (
    <Column w="100%" p="3" bg="white" space="3">
      <Row alignItems="center" space="2">
        <Icon as={MaterialIcons} name="whatshot" color="black" size="md" />
        <Text fontSize="md" bold>
          Threats
        </Text>
      </Row>
      <Column space='2'>
        <Column>
          <Text bold color="#08B364" fontSize="lg">
            Terrestrial, Marine
          </Text>
          <Text> {"\u2022"} Hunting & trapping terrestrial animals</Text>
          <Text> {"\u2022"} Fishing & harvesting aquatic resources</Text>
        </Column>
        <Column>
          <Text bold color="#08B364" fontSize="lg">
            Invasive and other problematic species, genes & diseases
          </Text>
          <Text>Invasive non-native/alien species/diseases</Text>
        </Column>
        <Column>
          <Text bold color="#08B364" fontSize="lg">
            Pollution
          </Text>
          <Text>Garbage & solid waste</Text>
        </Column>
        <Column>
          <Text bold color="#08B364" fontSize="lg">
            Climate change & severe weather
          </Text>
          <Text>Habitat shifting & alteration</Text>
        </Column>
      </Column>
    </Column>
  );
};

export default Threats;

const styles = StyleSheet.create({});
