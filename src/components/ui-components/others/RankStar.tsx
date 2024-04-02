import { StyleSheet, View } from "react-native";
import React from "react";
import { Column, Image, Text } from "native-base";

type Props = {
  type: string;
};

const RankStar = ({ type }: Props) => {
  return (
    <Column>
      {type == "bronze" && (
        <>
          <Image alt="" source={require("../../../../assets/bronze.png")} />
          <Text bold fontSize='md' textAlign='center'>Bronze</Text>
        </>
      )}
      {type == "silver" && (
        <>
          <Image alt="" source={require("../../../../assets/silver.png")} />
          <Text bold fontSize='md' textAlign='center'>Silver</Text>
        </>
      )}
      {type == "gold" && (
        <>
          <Image alt="" source={require("../../../../assets/gold.png")} />
          <Text bold fontSize='md' textAlign='center'>Gold</Text>
        </>
      )}
    </Column>
  );
};

export default RankStar;

const styles = StyleSheet.create({});
