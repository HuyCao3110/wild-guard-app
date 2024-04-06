import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Center, Column, Divider, Text } from "native-base";
import PrimaryButton from "./PrimaryButton";

type Props = {
  children?: string;
};

const GameTrophy = ({ children }: Props) => {
  return (
    <Box borderWidth="1" borderColor="#08B364" rounded="lg" px="4" py="3">
      <Center>
        <Center h="16">
          <Text fontSize="lg">{children}</Text>
        </Center>

        <Divider></Divider>

        <Text fontSize="lg" color="#08B364" bold>
          0/100
        </Text>
        <PrimaryButton mt='2' label="Improve" />
      </Center>
    </Box>
  );
};

export default GameTrophy;

const styles = StyleSheet.create({});
