import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Icon, Pressable, Row, StatusBar, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../../navigations/config";

type Props = {
  hasBack?: boolean;
  title?: string;
  searchBox?: boolean;
  goBack?: () => void;
};

const TopNavigation = ({ hasBack, title, searchBox, goBack }: Props) => {
  return (
    <>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      <Box
        h={searchBox ? "20" : "12"}
        backgroundColor="#4CAF50"
        justifyContent="flex-end"
      >
        <Row
          justifyContent="space-between"
          alignItems="center"
          px="1"
          pb={searchBox ? "7" : "2"}
        >
          <Box w="3">
            {hasBack && (
              <Pressable onPress={goBack}>
                <Icon
                  as={Ionicons}
                  name="chevron-back"
                  color="white"
                  size="lg"
                />
              </Pressable>
            )}
          </Box>
          <Text fontSize="md" color="white">
            {title}
          </Text>
          <Box w="3"></Box>
        </Row>
      </Box>
    </>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({});
