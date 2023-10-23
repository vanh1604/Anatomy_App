import { Platform, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Image, ScrollView, Stack, Text, View } from "native-base";
import Header from "../components/Header";
import CategoryInfo from "../components/CategoryInfo";
import { categoriesData } from "../db/category";
import { useNavigation } from "@react-navigation/native";
import { headerSlide } from "../db";

export default function Home() {
  const navigation = useNavigation<any>();
  return (
    <ScrollView width="100%" bg="white">
      <StatusBar barStyle="light-content" />
      <View height={Platform.OS == "android" ? 8 : 44} bg="#306599" />
      <Header title="Daily body's story" showSlide dataSlide={headerSlide} />
      <Stack marginTop={8} bg="white">
        <Text paddingX={8} fontSize={18} bold>
          OUR'S BODY
        </Text>
        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {categoriesData.map((item, index) => (
            <CategoryInfo
              key={index}
              onPress={() => {
                navigation.navigate("Category", { name: item.title });
              }}
              {...item}
            />
          ))}
        </View>
        <View marginBottom={50}></View>
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
