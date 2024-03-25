import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Icon, Row, Text } from "native-base";
import { Entypo } from "@expo/vector-icons";

const Taxonomy = () => {
  return (
    <Column w="100%" p="3" bg="white" space="3">
      <Row alignItems="center" space="2">
        <Icon as={Entypo} name="flow-tree" color="black" size="md" />
        <Text fontSize="md" bold>
          Taxonomy
        </Text>
      </Row>
      <Row justifyContent="space-between">
        <Column space="2">
          <Column>
            <Text>KINGDOM</Text>
            <Text bold color="#08B364" fontSize="lg">
              Animalia
            </Text>
          </Column>
          <Column>
            <Text>PHYLUM</Text>
            <Text bold color="#08B364" fontSize="lg">
              Chordata
            </Text>
          </Column>
          <Column>
            <Text>CLASS</Text>
            <Text bold color="#08B364" fontSize="lg">
              Aves
            </Text>
          </Column>
        </Column>
        <Column space="2">
          <Column>
            <Text>ORDER</Text>
            <Text bold color="#08B364" fontSize="lg">
              Procellariiformes
            </Text>
          </Column>
          <Column>
            <Text>FAMILY</Text>
            <Text bold color="#08B364" fontSize="lg">
              Diomedeidae
            </Text>
          </Column>
          <Column>
            <Text>GENUS</Text>
            <Text bold color="#08B364" fontSize="lg">
              Diomedea
            </Text>
          </Column>
        </Column>
      </Row>
    </Column>
  );
};

export default Taxonomy;

const styles = StyleSheet.create({});
