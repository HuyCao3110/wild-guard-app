import React from "react";
import {
  Box,
  Text,
  Image,
  Badge,
  Column,
  Row,
  Icon,
  Pressable,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  press?:()=> void
};

const AnimalCard = ({press}:Props) => {
  return (
    <Pressable onPress={press}>
      <Box rounded="2xl" borderWidth="1" borderColor="muted.400" w="100%">
        <Column>
          <Image
            roundedTop="2xl"
            height="40"
            alt=""
            width="100%"
            source={require("../../../../assets/albatross.png")}
          />
        </Column>
        <Column
          justifyContent="space-between"
          space="3"
          p="3"
          bg="white"
          roundedBottom="2xl"
        >
          <Row justifyContent="space-between">
            <Text>ANIMALIA - AVES</Text>
            <Text>GLOBAL</Text>
          </Row>
          <Column>
            <Text bold fontSize="lg">
              Wandering Albatross
            </Text>
            <Text italic>Diomedea exulans</Text>
          </Column>
          <Row justifyContent="space-between">
            <Row alignItems="center" space="2">
              <Icon as={AntDesign} name="arrowdown" color="warning.700" />
              <Text>Decreasing</Text>
            </Row>
            <Badge
              colorScheme="success"
              variant="solid"
              p="2"
              _text={{ fontSize: "xs" }}
            >
              Vulnarable
            </Badge>
          </Row>
        </Column>
      </Box>
    </Pressable>
  );
};

export default AnimalCard;
