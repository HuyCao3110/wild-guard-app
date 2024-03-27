import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Icon, Row, Text } from "native-base";
import { FontAwesome6 } from "@expo/vector-icons";

const AssessmentInfo = () => {
  return (
    <Column w="100%" p="3" bg="white" space="3">
      <Row alignItems="center" space="2">
        <Icon as={FontAwesome6} name="file-lines" color="black" size="md" />
        <Text fontSize="md" bold>
          Assessment Information
        </Text>
      </Row>
      <Column space='2'>
        <Column>
          <Text>IUCN RED LIST CATEGORY AND CRITERIA</Text>
          <Text bold color="#08B364" fontSize="lg">
            Vulnerable A4bd
          </Text>
        </Column>
        <Column>
          <Text>DATE ASSESSED</Text>
          <Text bold color="#08B364" fontSize="lg">
            07 August 2018
          </Text>
        </Column>
        <Column>
          <Text>YEAR PUBLISHED</Text>
          <Text bold color="#08B364" fontSize="lg">
            2018
          </Text>
        </Column>
      </Column>
    </Column>
  );
};

export default AssessmentInfo;

const styles = StyleSheet.create({});
