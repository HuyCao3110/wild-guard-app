import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Icon, List, Row, Text } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const UseTrade = () => {
  return (
    <Column w="100%" p="3" bg="white" space="3">
      <Row alignItems="center" space="2">
        <Icon as={MaterialIcons} name="whatshot" color="black" size="md" />
        <Text fontSize="md" bold>
          Use and Trade
        </Text>
      </Row>
      <Column space="2">
        <Text bold color="#08B364" fontSize="lg">
          Food - people
        </Text>
        <Row space="2">
          <Icon as={Ionicons} name="checkmark-circle" size="lg" color="black" />
          <Text fontSize="md">Local</Text>
        </Row>
        <Row space="2">
          <Icon as={Ionicons} name="checkmark-circle" size="lg" color="black" />
          <Text fontSize="md">National</Text>
        </Row>
        <Row space="2">
          <Icon as={Ionicons} name="close-circle" size="lg" color="black" />
          <Text fontSize="md">International</Text>
        </Row>
      </Column>
    </Column>
  );
};

export default UseTrade;

const styles = StyleSheet.create({});
