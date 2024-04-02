import { StyleSheet, View } from "react-native";
import React from "react";
import { Icon, Text, Row, Column } from "native-base";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  icon: string;
  children: string;
};

const GameTag = ({ icon, children }: Props) => {
  return (
    <Row
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth="1"
      borderColor="muted.200"
      py='3'
    >
      <Row space="3">
        <Icon as={Ionicons} name={icon} color="#08B364" size="md" />
        <Text bold fontSize="md">
          {children}
        </Text>
      </Row>
      <Icon as={Ionicons} name="chevron-forward" color="muted.300" />
    </Row>
  );
};

export default GameTag;

const styles = StyleSheet.create({});
