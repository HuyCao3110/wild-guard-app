import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Icon, List, Row, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Conservation = () => {
  return (
    <Column w="100%" p="3" bg="white" space="3">
      <Row alignItems="center" space="2">
        <Icon as={Ionicons} name="eye" color="black" size="md" />
        <Text fontSize="md" bold>
          Conservation Actions
        </Text>
      </Row>
      <Column space="2">
        <Column>
          <Text bold color="#08B364" fontSize="lg">
            In-place research and monitoring
          </Text>
          <Text> {"\u2022"} Action Recovery Plan : Yes</Text>
          <Text> {"\u2022"} Systematic monitoring scheme : Yes</Text>
        </Column>
        <Column>
          <Text bold color="#08B364" fontSize="lg">
            In-place land/water protection
          </Text>
          <Text>
            {" "}
            {"\u2022"} Conservation sites identified : Yes, over entire range
          </Text>
          <Text> {"\u2022"} Occurs in at least one protected area : Yes</Text>
          <Text> {"\u2022"} Invasive species control or prevention : Yes</Text>
        </Column>
        <Column>
          <Text bold color="#08B364" fontSize="lg">
            In-place species management
          </Text>
          <Text>
            {" "}
            {"\u2022"} Successfully reintroduced or introduced benignly : No
          </Text>
          <Text> {"\u2022"} Subject to ex-situ conservation : No</Text>
        </Column>
        <Column>
          <Text bold color="#08B364" fontSize="lg">
            In-place education
          </Text>
          <Text>
            {" "}
            {"\u2022"} Subject to recent education and awareness programmes : No
          </Text>
          <Text> {"\u2022"} Included in international legislation : Yes</Text>
          <Text>
            {" "}
            {"\u2022"} Subject to any international management / trade controls
            : No
          </Text>
        </Column>
      </Column>
    </Column>
  );
};

export default Conservation;

const styles = StyleSheet.create({});
