import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Divider, Icon, Input } from "native-base";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";

const SearchBox = () => {
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
            as={<MaterialIcons name="search" />}
            size="lg"
            ml="3"
            color="gray.400"
          />
        }
        InputRightElement={
          <>
            <Divider orientation="vertical" mx="3" h="70%" />
            <Icon
              as={<MaterialIcons name="tune" />}
              size="lg"
              mr="3"
              color="gray.400"
            />
          </>
        }
        backgroundColor="white"
      />
    </Box>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
