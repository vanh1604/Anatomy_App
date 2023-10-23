import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import QuizzHome from "../screens/Quizz/QuizzHome";
import Quizz from "../screens/Quizz/Quizz";
import Result from "../screens/Quizz/Result";

interface QuizzStackParams {
  Category: {
    name: string;
  };
  MemberDetail: {
    name: string;
  };
  Home: {};
}

const Stack = createNativeStackNavigator<QuizzStackParams & ParamListBase>();

export default function QuizzStack() {
  return (
    <Stack.Navigator initialRouteName="QuizzHome">
      <Stack.Screen name="QuizzHomeScreen" component={QuizzHome} options={{headerShown: false}} />
      <Stack.Screen name="QuizzScreen" component={Quizz} options={{headerShown: false}} />
      <Stack.Screen name="ResultScreen" component={Result} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
