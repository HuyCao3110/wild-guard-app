import { StyleSheet, View } from "react-native";
import React from "react";
import TopNavigation from "../../components/ui-components/information/TopNavigation";
import { Column, Text, Image, Radio, Center, Row, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../../components/ui-components/others/PrimaryButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<RootStackParams>;

const ChooseAnswer = ({navigation}:Props) => {

  function backtoGames(){
    navigation.goBack()
  }

  return (
    <>
      <TopNavigation hasBack title="Choose the correct answer" goBack={backtoGames}/>
      <Column flex="1" px="5" pt="5" pb="7" justifyContent="space-between">
        <Column space="10">
          <Column space="2">
            <Text fontSize="lg" bold>
              Câu 1
            </Text>
            <Image
              w="100%"
              alt=""
              source={require("../../../assets/albatross.png")}
            />
          </Column>
          <Radio.Group name="Answer group" colorScheme="black">
            <Column space="3">
              <Radio value="A">A. Wandering Albatross</Radio>
              <Radio value="B">B. Wandering Albatross</Radio>
              <Radio value="C">C. Wandering Albatross</Radio>
              <Radio value="D">D. Wandering Albatross</Radio>
            </Column>
          </Radio.Group>
          <Center>
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

export default ChooseAnswer;

const styles = StyleSheet.create({});
