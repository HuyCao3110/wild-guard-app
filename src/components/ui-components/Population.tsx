import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Icon, Row, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Population = () => {
  return (
    <Column w="100%" p="3" bg="white" space="3">
      <Row alignItems="center" space="2">
        <Icon
          as={MaterialCommunityIcons}
          name="swap-vertical"
          color="black"
          size="md"
        />
        <Text fontSize="md" bold>
          Population
        </Text>
      </Row>
      <Column space="2">
        <Column>
          <Text>CURRENT POPULATION TREND</Text>
          <Text bold color="#08B364" fontSize="lg">
            Decreasing
          </Text>
        </Column>
        <Column>
          <Text>NUMBER OF MATURE INDIVIDUALS</Text>
          <Text bold color="#08B364" fontSize="lg">
            20,100
          </Text>
        </Column>
        <Column>
          <Text>POPULATION SEVERELY FRAGMENTED</Text>
          <Text bold color="#08B364" fontSize="lg">
            No
          </Text>
        </Column>
        <Column>
          <Text>CONTINUING DECLINE OF MATURE INDIVIDUALS</Text>
          <Text bold color="#08B364" fontSize="lg">
            Yes
          </Text>
        </Column>
      </Column>
    </Column>
  );
};

export default Population;

const styles = StyleSheet.create({});
