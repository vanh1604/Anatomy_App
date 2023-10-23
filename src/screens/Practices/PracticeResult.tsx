import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image, Stack } from "native-base";
import { useRoute } from "@react-navigation/native";
import { practiceData } from "../../db/practice";

const show: { [key: string]: string } = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const PracticeResult = () => {
  const route = useRoute<any>();
  const level: string = route.params.level ? route.params.level : "easy";

  return (
    <View style={styles.bg}>
      <Text style={styles.text__main}>PRACTICE WITH ZOODY</Text>
      <Text style={styles.text__level}>Level: {show[level]}</Text>
      <View style={styles.container}>
        <Text style={styles.text__comment}>GREAT JOB</Text>
        <Text style={styles.text__score}>Your score</Text>
        <View style={styles.box__score}>
          <View style={[styles.ques, styles.ques__total]}>
            <Text style={styles.ques__num}>{practiceData[level].length}</Text>
            <Text>question</Text>
          </View>
          <View style={[styles.ques, styles.ques__true]}>
            <Text style={[styles.ques__num, styles.text__white]}>8</Text>
            <Text style={styles.text__white}>true</Text>
          </View>
          <View style={[styles.ques, styles.ques__false]}>
            <Text style={[styles.ques__num, styles.text__white]}>2</Text>
            <Text style={styles.text__white}>false</Text>
          </View>
        </View>
      </View>

      <Image
        source={require("../../../assets/images/crocodile-bg.png")}
        width={Math.round(Dimensions.get("screen").height * 0.3)}
        height={Math.round(Dimensions.get("screen").height * 0.3)}
        alt="quizresult-bg"
        position="absolute"
        resizeMode="stretch"
        bottom="3"
        right="0"
      />
    </View>
  );
};

export default PracticeResult;

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#3D7944",
    alignItems: "center",
  },
  text__main: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 50,
  },
  text__level: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 5,
    marginBottom: 20,
  },
  container: {
    width: "85%",
    height: "50%",
    backgroundColor: "#FFFFFF",
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  text__comment: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#3D7944",
    marginTop: 20,
  },
  text__score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3D7944",
    marginTop: 10,
  },
  box__score: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  ques: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  ques__total: {
    backgroundColor: "#F7D46B",
  },
  ques__true: {
    backgroundColor: "#3D7944",
  },
  ques__false: {
    backgroundColor: "#D00809",
  },
  ques__num: {
    fontSize: 35,
    fontWeight: "bold",
  },
  text__white: {
    color: "#FFFFFF",
  },
});
