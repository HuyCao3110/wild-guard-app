import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GameTrophy from "../components/ui-components/others/GameTrophy";
import TrophyPanel from "../components/ui-components/others/TrophyPanel";
import TopNavigation from "../components/ui-components/information/TopNavigation";
import { Box, Column, Icon, Row } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import RankStar from "../components/ui-components/others/RankStar";

const Trophy = () => {
  return (
    <>
      <TopNavigation title="Trophy" />
      <Column pt="5" px="5">
        <Row justifyContent="space-between" alignItems="center">
          <Icon as={Ionicons} name="chevron-back" size="2xl" />
          <RankStar type="bronze" />
          <Icon as={Ionicons} name="chevron-forward" size="2xl" />
        </Row>
        <Box mt="20">
          <TrophyPanel />
        </Box>
      </Column>
    </>
  );
};

export default Trophy;

const styles = StyleSheet.create({});
