import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Column,
  Icon,
  Text,
  Row,
  StatusBar,
  Center,
  Divider,
  Button,
  ScrollView,
  Pressable,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import TaxonomyCheck from "../../components/ui-components/others/TaxonomyCheck";
import Category from "../../components/ui-components/others/Category";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigations/config";
import PrimaryButton from "../../components/ui-components/others/PrimaryButton";

type Props = {} & NativeStackScreenProps<HomeStackParams>;

const Filter = ({ navigation }: Props) => {
  return (
    <>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      <ScrollView>
        <Column flex="1" pt="5" bg="white" px="5" pb="7">
          <Row justifyContent="space-between" alignItems="center">
            <Row alignItems="center" space="2">
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Icon
                  as={Ionicons}
                  name="chevron-back"
                  size="lg"
                  color="black"
                />
              </Pressable>
              <Text bold fontSize="xl">
                Filter
              </Text>
            </Row>
            <Center
              borderWidth="1"
              borderColor="muted.400"
              borderRadius="md"
              p="2"
            >
              <Row alignItems="center" space="1">
                <Text color="muted.400" fontSize="xs">
                  Clear all
                </Text>
                <Icon
                  as={Ionicons}
                  name="close-outline"
                  color="muted.400"
                  size="sm"
                />
              </Row>
            </Center>
          </Row>
          <Divider mt="7" />
          <TaxonomyCheck />
          <Divider mt="1" />
          <Category />
          <PrimaryButton mt='10' label="Apply"/>
        </Column>
      </ScrollView>
    </>
  );
};

export default Filter;

const styles = StyleSheet.create({});
