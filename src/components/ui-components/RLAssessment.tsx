import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Text } from "native-base";

const RLAssessment = () => {
  return (
    <Column w='100%' space='2' bg='white'>
      <Text bold fontSize='md'>THE RED LIST ASSESSMENT</Text>
      <Column>
        <Text>LAST ASSESSED</Text>
        <Text fontSize='lg' color='#08B364' bold>07 August 2018</Text>
      </Column>
      <Column>
        <Text>SCOPE OF ASSESSMENT</Text>
        <Text fontSize='lg' color='#08B364' bold>Global</Text>
      </Column>
    </Column>
  );
};

export default RLAssessment;

const styles = StyleSheet.create({});
