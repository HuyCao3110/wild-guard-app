import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Column, ScrollView } from "native-base";
import TopNavigation from "../components/ui-components/information/TopNavigation";
import NewsCard from "../components/ui-components/others/NewsCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NewsStackParams } from "../navigations/config";

type Props = {} & NativeStackScreenProps<NewsStackParams>

const News = ({navigation}:Props) => {

  function toNewsDetail(){
    navigation.navigate('NewsDetail')
  }

  return (
    <>
      <TopNavigation title="News" />
      <ScrollView>
        <Column bg="white" px="5" pt="5" space="3">
          <NewsCard goTo={toNewsDetail} />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Column>
      </ScrollView>
    </>
  );
};

export default News;

const styles = StyleSheet.create({});
