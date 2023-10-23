import {
  StyleSheet,
  Text,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import {
  Button,
  Icon,
  Image,
  Input,
  Stack,
  Pressable,
  View,
} from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const Signin = () => {
  const [show, setShow] = React.useState(false);
  const [isChecked, setChecked] = React.useState(false);
  return (
    <View
      style={{ height: "100%", backgroundColor: 'white', justifyContent: "center", alignItems: "center" }}
    >
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/images/logo_zoody.png")}
            width= '147'
            height='133'
            alt="popup-bg"
            style={{ zIndex: 1 }}
          />
        </View>
        <Text style={styles.text_login}>ĐĂNG NHẬP</Text>
        <Stack space={4} w="100%" alignItems="center">
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            bg="white"
            borderRadius="15"
            placeholder="user name"
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            bg="white"
            borderRadius="15"
            placeholder="password"
          />
        </Stack>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.paragraph}>Ghi nhớ tôi</Text>
        </View>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "70%",
    backgroundColor: "#DAEAD7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: 'relative'
  },
  logo: {
    position: 'absolute',
    top: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: "center"
  },
  text_login: {
    fontSize: 20,
    color: "#3D7944",
    fontWeight: "700",
    marginVertical: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
