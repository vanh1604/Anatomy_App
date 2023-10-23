import { Text, StyleSheet, Dimensions, ImageSourcePropType, ImageBackground, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import MemberImage, { MemberImageProps } from "../components/MemberImage";
import { HStack, Box, Stack, ScrollView, View } from "native-base";
import Slide from "../components/Slide";
import { memberDetailData } from "../db/memberdetail";
import { useRoute } from "@react-navigation/native";
import PartSummary from "../components/PartSummary";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

export default function MemberDetail() {
  const route = useRoute<any>();
  // console.log(route.params);
  const navigation = useNavigation();
  const title = route.params.name;

  const name = route.params.name ? route.params.name : "zebra";
  return (
    <View>
      <ScrollView>
        <View height={Platform.OS == "android" ? 8 : 44} bg="#306599" />
        <Header title={title} showSlide dataSlide={memberDetailData[name].slide} />
        
        <View style={{ width: "79%", marginHorizontal: "10.5%", marginTop: 10 }}>
          <View style={{ marginTop: 10 }}>
            {
              memberDetailData[name].intro.map((text) => (
                <Text style={{ fontWeight: "normal", marginTop: 10, fontSize: 16  }} key={text}>{text}</Text>
              ))
            }
          </View>

          <View>
              {memberDetailData[name].func.map((text) => (
                  <Text style={{ fontWeight: "normal", marginTop: 10, fontSize: 16 }} key={text}>{text}</Text>
                ))}
          </View>

          <View>
              {memberDetailData[name].anatomy.map((text) => (
                  <Text style={{ fontWeight: "normal", marginTop: 10, fontSize: 16  }} key={text}>{text}</Text>
                ))}
          </View>
        </View>
        <View style={{height: 10}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
