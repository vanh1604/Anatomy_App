import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CharacterBox from "./src/components/CharacterBox";
import MemberItem, { MemberItemProps } from "./src/components/MemberItem";
import SearchBar from "./src/components/SearchBar";
import Header from "./src/components/Header";
import MemberImage from "./src/components/MemberImage";
import Home from "./src/screens/Home";
import TextBox, { EStatus } from "./src/components/TextBox";
import PartSummary, { PartSummaryProps } from "./src/components/PartSummary";
import CategoryInfo, { CategoryInfoProps } from "./src/components/CategoryInfo";
import Category from "./src/screens/Category";
import { Stack } from "native-base";
import MemberDetail from "./src/screens/MemberDetail";
import Part from "./src/components/Part";

// const data: MemberDetailProps[] = [
//   {
//     icon: require("./assets/images/weight.png"),
//     text: '90 - 310 kg',
//   },

// {
//   icon: require("./assets/images/lenght.png"),
//   text: '2,5 – 3,9 m',
// },

// {
//   icon: require("./assets/images/time.png"),
//   text: '8 – 10 years',
// },

// {
//   icon: require("./assets/images/Group.png"),
//   text: '96 km/h',
// },

// ];

const questions = ["Con trung", "Vu", "De trung"];

export default function Main() {
  // return <PartSummary {...data[0]} />;
  return <Part />;
}

const styles = StyleSheet.create({});
