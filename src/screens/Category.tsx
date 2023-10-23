import { StyleSheet, Text, ScrollView, TouchableOpacity, ImageBackground, Dimensions, Platform } from "react-native";
import React from "react";
import { Stack, View } from "native-base";
import Header from "../components/Header";
import MemberItem from "../components/MemberItem";
import { useNavigation, useRoute } from "@react-navigation/native";
import { categoryData } from "../db";

export default function Category() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const title = route.params.name;
  
  return (
    <Stack>
      <View height={Platform.OS == "android" ? 8 : 44} bg="#306599" />
      <Header title={title} dataSlide={undefined} />
      <ScrollView style={{ height: Dimensions.get("screen").height - 250 }}>
        <View style={{ flexDirection: "row", width: "95%", marginHorizontal: "2.5%", flexWrap: "wrap", marginTop: 4 }}>
          {categoryData[title].map((info, index) => (
            <View style={{ marginHorizontal: 15, marginVertical: 15 }} key={info.name + String(index)}>
              <MemberItem
                {...info}
                onPress={() => navigation.navigate("MemberDetail", { name: info.name })}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </Stack>
  );
}

const styles = StyleSheet.create({
  endBg: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
});
