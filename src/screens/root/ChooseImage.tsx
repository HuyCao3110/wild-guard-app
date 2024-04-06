import { StyleSheet, View } from "react-native";
import React from "react";
import TopNavigation from "../../components/ui-components/information/TopNavigation";
import { Box, Column, Row, Text, Image, Center, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../../components/ui-components/others/PrimaryButton";

const ChooseImage = () => {
  return (
    <>
      <TopNavigation hasBack title="Choose the right image" />
      <Column flex='1' justifyContent='space-between' pt='5' pb='7' px='5'>
        <Column>
          <Text fontSize='lg' bold>Câu 1</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Sagittis sem nisl mauris
            pretium. Tellus aliquet porta nascetur sit neque.
          </Text>
          <Center mt='10'>
            <Row space="3">
              <Column space="3">
                <Box>
                  <Image
                    alt=""
                    source={require("../../../assets/image-choice.png")}
                  />
                </Box>
                <Box>
                  <Image
                    alt=""
                    source={require("../../../assets/image-choice.png")}
                  />
                </Box>
              </Column>
              <Column space="3">
                <Box>
                  <Image
                    alt=""
                    source={require("../../../assets/image-choice.png")}
                  />
                </Box>
                <Box>
                  <Image
                    alt=""
                    source={require("../../../assets/image-choice.png")}
                  />
                </Box>
              </Column>
            </Row>
          </Center>
          <Center mt="40">
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
        <PrimaryButton label="Next"/>
      </Column>
    </>
  );
};

export default ChooseImage;

const styles = StyleSheet.create({});
