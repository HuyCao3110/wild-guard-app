import { StyleSheet, View } from "react-native";
import React from "react";
import { Icon, Row, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  children: string;
};

const CategoryTag = ({ children }: Props) => {
  return (
    <Row alignItems='center' space='2' borderTopWidth='0.2' py='1'>
      <Icon as={Ionicons} name="chevron-forward" color='black' />
      <Text fontSize='md'>{children}</Text>
    </Row>
  );
};

export default CategoryTag;

const styles = StyleSheet.create({});
