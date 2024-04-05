import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Divider, Icon, Input, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  action?: () => void;
};

const SearchBox = ({action}:Props) => {
  return (
    <Box>
      <Input
        borderWidth={1}
        width="90%"
        variant="rounded"
        placeholder="Tìm kiếm"
        fontSize="md"
        InputLeftElement={
          <Icon
            as={<Ionicons name="search" />}
            size="lg"
            ml="3"
            color="gray.400"
          />
        }
        InputRightElement={
          <>
            <Divider orientation="vertical" mx="3" h="70%" />
            <Pressable onPress={action}>
              <Icon
                as={Ionicons}
                name="options-outline"
                size="lg"
                mr="3"
                color="gray.400"
              />
            </Pressable>
          </>
        }
        backgroundColor="white"
      />
    </Box>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
