import {
  StyleSheet,
  Text,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { Button, Icon, Image, Input, ScrollView, Stack, View, Pressable } from "native-base";
import React from "react";

const PopupWarning = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.bg}>
          <Image
            source={require("../../assets/images/popup-bg.png")}
            width={Math.round(Dimensions.get("screen").height * 0.2)}
            height={Math.round(Dimensions.get("screen").height * 0.15)}
            alt="popup-bg"
            style={{ zIndex: 1 }}
          />
        </View>
        <Text style={styles.text__popup}>
          Kết quả bài test sẽ bị hủy bỏ nếu bạn ấn làm lại
        </Text>
        <View style={styles.box__btn}>
          <Button style={styles.btn__again}>
            <Text style={styles.text__again}>Làm lại</Text>
          </Button>
          <Button style={styles.btn__continue}>
            <Text style={styles.text__continue}>Làm tiếp</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default PopupWarning;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    marginTop: 40,
  },
  container: {
    position: "relative",
    width: "80%",
    height: 200,
    backgroundColor: "#FCD02E",
    borderRadius: 30,
    justifyContent: "space-evenly",
  },
  bg: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    top: -40,
  },
  text__popup: {
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: "15%",
    marginTop: 50,
  },
  box__btn: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn__again: {
    width: "30%",
    backgroundColor: "#FCD02E",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FFFFFF",
    marginHorizontal: 10,
  },
  text__again: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  btn__continue: {
    width: "30%",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
  },
  text__continue: {
    color: "#FCD02E",
    fontSize: 18,
  },
});
