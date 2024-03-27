import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Icon, Row, Text } from "native-base";
import { Entypo } from "@expo/vector-icons";

const GeographicRange = () => {
  return (
    <Column w="100%" p="3" bg="white" space="3">
      <Row alignItems="center" space="2">
        <Icon as={Entypo} name="globe" color="black" size="md" />
        <Text fontSize="md" bold>
          Geographic Range
        </Text>
      </Row>
      <Column space='2'>
        <Column>
          <Text>NATIVE</Text>
          <Text>Extant (breeding)</Text>
          <Text bold color="#08B364" fontSize="lg">
            Australia; French Southern Territories; South Africa (Marion-Prince
            Edward Is.); South Georgia and the South Sandwich Islands
          </Text>
        </Column>
        <Column>
          <Text>Extant (non-breeding)</Text>
          <Text bold color="#08B364" fontSize="lg">
            Antarctica; Argentina; Brazil; Chile; Falkland Islands (Malvinas);
            Heard Island and McDonald Islands; Madagascar; Mozambique; Namibia;
            New Zealand; Norfolk Island; Saint Helena, Ascension and Tristan da
            Cunha; South Africa; Uruguay
          </Text>
        </Column>
        <Column>
          <Text>Extant & Vagrant (non-breeding)</Text>
          <Text bold color="#08B364" fontSize="lg">
            Fiji; Panama
          </Text>
        </Column>
        <Column>
          <Text>Extant & Vagrant</Text>
          <Text bold color="#08B364" fontSize="lg">
            Angola; French Polynesia; Italy; Japan; Mauritius; Portugal;
            Réunion; United States
          </Text>
        </Column>
        <Column>
          <Text>Extant & Origin Uncertain (seasonality uncertain)</Text>
          <Text bold color="#08B364" fontSize="lg">
            Bouvet Island; Tonga
          </Text>
        </Column>
      </Column>
    </Column>
  );
};

export default GeographicRange;

const styles = StyleSheet.create({});
