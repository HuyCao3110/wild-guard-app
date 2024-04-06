import { StyleSheet, View } from "react-native";
import React from "react";
import TopNavigation from "../../components/ui-components/information/TopNavigation";
import { Column, Text, Row, Center, Image, ScrollView } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NewsStackParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<NewsStackParams>;

const NewsDetail = ({ navigation }: Props) => {
  function toNews() {
    navigation.goBack();
  }

  return (
    <>
      <TopNavigation hasBack title="News" goBack={toNews} />
      <ScrollView>
        <Column space="7" px="5" pt="5" pb='8'>
          <Column>
            <Text fontSize="xs">2023-12-23</Text>
            <Text fontSize="md" bold>
              The 2023 Red List update reveals hope for birds in crisis
            </Text>
          </Column>
          <Center>
            <Image
              w="100%"
              alt=""
              source={require("../../../assets/shutterstock.png")}
            />
          </Center>
          <Column space="3">
            <Text>
              As the world teeters on the precipice of environmental
              devastation, BirdLife’s contribution to the 2023 IUCN Red List
              provides a stark reminder that we are losing birds at an
              unprecedented rate...
            </Text>
            <Text>
              Another success story concerns the downlisting from Critically
              Endangered to Endangered of Millerbird, a Hawaiian reed-warbler,
              thanks to translocation efforts. However, other Hawaiian endemics
              tell a different story, as rising temperatures, invasive alien
              species and disease mean two species of honeycreeper – Anianiau
              and Kauai Amakihi – have been uplisted from Vulnerable to
              Endangered. Elsewhere, Juan Fernandez Tit-tyrant, endemic to
              Robinson Crusoe Island off the coast of Chile, suffers from the
              impacts of invasive species and native plant loss, and has been
              uplisted from Near Threatened to Endangered. Island endemics are
              not the only bird species struggling. Citron-throated Toucan has
              experienced considerable population declines, moving from Least
              Concern to Near Threatened due to the ongoing effect of forest
              loss in South America. Palm Cockatoo has also been uplisted from
              Least Concern to Near Threatened, due to habitat loss,
              particularly the loss of hollows in trees needed for breeding and,
              on New Guinea, apparently increasing intensities of trapping for
              the pet trade. In South-East Asia, lowland forest loss continues
              to drive rapid population declines, with Cinnamon-rumped Trogon
              now uplisted from Near Threatened to Vulnerable. Great Bustard has
              been uplisted from Vulnerable to Endangered due to a range of
              threats across Eurasia,
            </Text>
          </Column>
        </Column>
      </ScrollView>
    </>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({});
