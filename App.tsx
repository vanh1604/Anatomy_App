import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Main";
import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { Ionicons } from "@expo/vector-icons";
import IconBottomTab from "./src/components/IconBottomTab";
import HomeStack from "./src/navigations/HomeStack";
import QuizzStack from "./src/navigations/QuizzStack";
import PracticeStack from "./src/navigations/PracticeStack";
import PopupWarning from "./src/components/PopupWarning";
import Signin from "./src/screens/Signin";
import { StyleSheet } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

// Navigation
const Tab = createBottomTabNavigator();

interface TabOptions {
  route: RouteProp<ParamListBase>;
  navigation: any;
}

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const options = (props: TabOptions): BottomTabNavigationOptions => {
  const { route } = props;
  const tabBarIcon = ({ focused }: TabBarIconProps) => {
    return <IconBottomTab name={route.name} focused={focused} />;
  };

  return {
    tabBarIcon,
    headerShown: false,
    tabBarActiveTintColor: "#fff",
    tabBarInactiveTintColor: "#B8B8B8",
    tabBarLabelStyle: { fontSize: 12 },
    tabBarStyle: { paddingVertical: 4, backgroundColor: "#306599" },
  };
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeStack} options={options} />
          <Tab.Screen name="Quizz" component={QuizzStack} options={options} />
          <Tab.Screen name="Practice" component={PracticeStack} options={options} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
