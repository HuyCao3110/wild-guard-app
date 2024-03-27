import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Icon, Row, Text } from "native-base";

const MatureIndividuals = () => {
  return (
    <Column w='100%' p='3' bg='white'>
        <Text bold fontSize='md' >NUMBER OF MATURE INDIVIDUALS</Text>
        <Text fontSize='lg' color='#08B364' bold>20.100</Text>
    </Column>
  )
}

export default MatureIndividuals

const styles = StyleSheet.create({})