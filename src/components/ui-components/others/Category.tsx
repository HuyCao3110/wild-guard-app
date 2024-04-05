import { StyleSheet, View } from "react-native";
import React from "react";
import { Checkbox, Column, FlatList, Icon, Row, Text } from "native-base";
import CategoryTag from "./CategoryTag";

const DATA = [
  { name: "Red List Category" },
  { name: "Land Regions" },
  { name: "Country Legends" },
  { name: "Marine Regions" },
  { name: "Threats" },
  { name: "Habitats" },
  { name: "Conservation Actions Needed" },
  { name: "Research Needed" },
  { name: "Use and Trade" },
  { name: "Publication Year" },
  { name: "Systems" },
  { name: "Biogeographical Realm" },
  { name: "Population Trend" },
  { name: "Plant and Fungal growth forms" },
];

function renderCategoryTag({item}:any){
    return(
        <CategoryTag>{item.name}</CategoryTag>
    )
}

const Category = () => {
  return (
    <Column space="2" w="100%" bg="white" >
      <FlatList data={DATA} renderItem={renderCategoryTag}/>
    </Column>
  );
};

export default Category;

const styles = StyleSheet.create({});
