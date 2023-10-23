import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import PracticeHome from "../screens/Practices/PracticeHome";
import Practice from "../screens/Practices/Practice";
import PracticeResult from "../screens/Practices/PracticeResult";

interface PracticeStackParams {
  Category: {
    name: string;
  };
  MemberDetail: {
    name: string;
  };
  Home: {};
}

const Stack = createNativeStackNavigator<PracticeStackParams & ParamListBase>();

export default function PracticeStack() {
  return (
    <Stack.Navigator initialRouteName="PracticeHome">
      <Stack.Screen name="PracticeHomeScreen" component={PracticeHome} options={{headerShown: false}} />
      <Stack.Screen name="PracticeScreen" component={Practice} options={{headerShown: false}} />
      <Stack.Screen name="PracticeResultScreen" component={PracticeResult} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
