import { StyleSheet, View } from "react-native";
import React from "react";
import TopNavigation from "../../components/ui-components/information/TopNavigation";
import { Center, Column, Icon, Radio, Row, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../../components/ui-components/others/PrimaryButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<RootStackParams>;

const FillWord = ({navigation}:Props) => {
  function backtoGames() {
    navigation.goBack();
  }

  return (
    <>
      <TopNavigation hasBack title="Fill in words" goBack={backtoGames}/>
      <Column flex="1" justifyContent="space-between" pt="5" pb="7" px="5">
        <Column>
          <Text fontSize="lg" bold>
            Câu 1
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur. ________ Sagittis sem nisl
            mauris pretium. Tellus aliquet porta nascetur sit neque.
          </Text>
          <Radio.Group name="Answer group" colorScheme="black">
            <Column space="3" mt="48">
              <Radio value="A">A. Wandering Albatross</Radio>
              <Radio value="B">B. Wandering Albatross</Radio>
              <Radio value="C">C. Wandering Albatross</Radio>
              <Radio value="D">D. Wandering Albatross</Radio>
            </Column>
          </Radio.Group>
          <Center mt="12">
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

export default FillWord;

const styles = StyleSheet.create({});
