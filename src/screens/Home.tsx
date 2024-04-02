import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
import {
  Button,
  Center,
  Column,
  Icon,
  Row,
  ScrollView,
  Stack,
  Text,
} from "native-base";
import TopNavigation from "../components/ui-components/information/TopNavigation";

import NewsCard from "../components/ui-components/others/NewsCard";
import Game from "../components/ui-components/others/Game";
import RankStar from "../components/ui-components/others/RankStar";
import SearchBox from "../components/ui-components/information/SearchBox";
import { Ionicons } from "@expo/vector-icons";
import AnimalCard from "../components/ui-components/others/AnimalCard";
import SpeciesCard from "../components/ui-components/others/SpeciesCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../navigations/config";

type Props = {} & NativeStackScreenProps<HomeStackParams>;

const Home = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  function toAnimalDetails() {
    navigation.navigate("AnimalDetails");
  }
  return (
    <>
      <ScrollView>
        <Stack>
          <TopNavigation title="WildGuard" searchBox />
        </Stack>
        <Center w="100%" zIndex={1} position="absolute" top="60px">
          <SearchBox />
        </Center>
        <Stack h="12" bg="white" />

        <Column zIndex={0} flex={1} bg="white" space="5" px="5">
          <Row justifyContent="space-between" alignItems="center">
            <Text fontSize="md">Amazing species</Text>
            <Row alignItems="center" space="1">
              <Text fontSize="xs">See more</Text>
              <Icon as={Ionicons} name="arrow-forward-outline" />
            </Row>
          </Row>
          <AnimalCard press={toAnimalDetails} />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />

          <Column>
            <Text bold color="#08B364" fontSize="3xl">
              More than 44,000 species are threatened with extinction
            </Text>
            <Text fontSize="lg">
              That is still 28% of all assessed species.
            </Text>
          </Column>
          <Column space="2">
            <SpeciesCard />
            <SpeciesCard />
            <SpeciesCard />
            <SpeciesCard />
            <SpeciesCard />
            <SpeciesCard />
            <SpeciesCard />
            <SpeciesCard />
            <SpeciesCard />
            <SpeciesCard />
            <SpeciesCard />
          </Column>
        </Column>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
