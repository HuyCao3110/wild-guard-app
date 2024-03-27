import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Icon, Row, Text } from "native-base";
import { Foundation } from "@expo/vector-icons";

const ExtendedEcology = () => {
  return (
    <Column w="100%" p="3" bg="white" space="3">
      <Row alignItems="center" space="2">
        <Icon as={Foundation} name="mountains" color="black" size="md" />
        <Text fontSize="md" bold>
          Habitat and Ecology
        </Text>
      </Row>
      <Column space="2">
        <Column>
          <Text>SYSTEM</Text>
          <Text bold color="#08B364" fontSize="lg">
            Terrestrial, Marine
          </Text>
        </Column>
        <Column>
          <Text>HABITAT TYPE</Text>
          <Text bold color="#08B364" fontSize="lg">
            Grassland, Marine Neritic, Marine Oceanic
          </Text>
        </Column>
        <Column>
          <Text>GENERATION LENGTH (YEARS)</Text>
          <Text bold color="#08B364" fontSize="lg">
            23.3 years
          </Text>
        </Column>
        <Column>
          <Text>
            CONTINUING DECLINE IN AREA, EXTENT AND/OR QUALITY OF HABITAT
          </Text>
          <Text bold color="#08B364" fontSize="lg">
            Unknown
          </Text>
        </Column>
        <Column>
          <Text>CONGREGATORY</Text>
          <Text bold color="#08B364" fontSize="lg">
            Congregatory (and dispersive)
          </Text>
        </Column>
        <Column>
          <Text>MOVEMENT PATTERNS</Text>
          <Text bold color="#08B364" fontSize="lg">
            Full Migrant
          </Text>
        </Column>
      </Column>
    </Column>
  );
};

export default ExtendedEcology;

const styles = StyleSheet.create({});
