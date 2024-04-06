import { StyleSheet, View } from "react-native";
import React from "react";
import TopNavigation from "../../components/ui-components/information/TopNavigation";
import { Box, Center, Column, Icon, Image, Row, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../../components/ui-components/others/PrimaryButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<RootStackParams>;

const MatchPicture = ({ navigation }: Props) => {
  function backtoGames() {
    navigation.goBack();
  }

  return (
    <>
      <TopNavigation hasBack title="Fill in words" goBack={backtoGames} />
      <Column
        flex="1"
        justifyContent="space-between"
        pt="5"
        pb="7"
        px="5"
        bg="white"
      >
        <Column>
          <Center>
            <Image alt="" source={require("../../../assets/big-puzzle.png")} />
          </Center>
          <Text fontSize="md" mt="3">
            Lorem ipsum dolor sit amet consectetur. Eget congue aenean massa
            enim dictum imperdiet.
          </Text>
          <Row justifyContent="flex-end" mt="3">
            <Image alt="" source={require("../../../assets/puzzle.png")} />
          </Row>
          <Center mt="5">
            <Row space="3">
              <Icon
                as={Ionicons}
                name="arrow-back-circle"
                size="2xl"
                color="black"
              />
              <Icon
                as={Ionicons}
                name="arrow-forward-circle"
                size="2xl"
                color="black"
              />
            </Row>
          </Center>
        </Column>
        <PrimaryButton label="Next" />
      </Column>
    </>
  );
};

export default MatchPicture;

const styles = StyleSheet.create({});
