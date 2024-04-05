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
  goTo?: () => void;
};

const NewsCard = ({goTo}:Props) => {
  return (
    <Pressable onPress={goTo}>
      <Box rounded="2xl" borderWidth="1" w="100%">
        <Column>
          <Image
            roundedTop="2xl"
            height="40"
            width="100%"
            alt=""
            source={require("../../../../assets/albatross.png")}
          />
        </Column>
        <Column
          justifyContent="space-between"
          p="3"
          bg="white"
          roundedBottom="2xl"
          space="2"
        >
          <Text>2023-12-23</Text>
          <Column>
            <Text bold fontSize="lg">
              The 2023 Red List update reveals hope for birds in crisis
            </Text>
            <Text italic>
              As the world teeters on the precipice of environmental
              devastation, BirdLife's contribution to the 2023 IUCN Red List
              provides a stark reminder that we are losing birds at an
              unprecedented rate...
            </Text>
          </Column>
          <Row justifyContent="flex-end">
            <Row alignItems="center" space="2">
              <Text color="muted.400">Read more</Text>
              <Icon as={AntDesign} name="arrowright" color="muted.400" />
            </Row>
          </Row>
        </Column>
      </Box>
    </Pressable>
  );
};

export default NewsCard;
