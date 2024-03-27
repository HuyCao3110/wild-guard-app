import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Icon, Stack, StatusBar, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  hasBack?: boolean;
  title?: string;
};

const TopNavigation = ({ hasBack, title }: Props) => {
  return (
    <>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      <Box h="16" backgroundColor="#4CAF50" justifyContent="flex-end">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          px="1"
          pb="2"
        >
          <Box w="3">
            {hasBack && (
              <Icon as={Ionicons} name="chevron-back" color="white" size="lg" />
            )}
          </Box>
          <Text fontSize="md" color="white">
            {title}
          </Text>
          <Box w="3"></Box>
        </Box>
      </Box>
    </>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({});
