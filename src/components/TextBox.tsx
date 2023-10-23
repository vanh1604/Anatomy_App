import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";

export enum EStatus {
  CORRECT,
  IN_CORRECT,
  NORMAL,
  DISABLE,
}

export interface TextBoxProps extends TouchableOpacityProps {
  status: EStatus;
  content: string;
}

const TextBox = (props: TextBoxProps) => {
  const { status, content, style, ...rest } = props;
  let extraBox = {};
  let extraText = {};
  
  switch (status) {
    case EStatus.CORRECT:
      extraBox = styles.correctBox;
      extraText = styles.correctText;
      break;
    case EStatus.IN_CORRECT:
      extraBox = styles.in_correctBox;
      extraText = styles.in_correctText;
      break;
    case EStatus.DISABLE:
      extraBox = styles.disableBox;
      extraText = styles.disableText;
      break;
    default:
      extraBox = {};
      extraText = {};
      break;
  }
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <View style={[styles.box, extraBox]}>
        <Text style={[styles.text, extraText]}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
  },
  box: {
    width: "70%",
    height: 41,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#1F405F",
    borderWidth: 1,
    justifyContent: "center",
  },
  text: {
    color: "#000",
    marginLeft: 10,
  },
  correctBox: {
    backgroundColor: "#1F405F",
    borderColor: "#1F405F",
    borderWidth: 1,
  },
  correctText: {
    color: "#FFFFFF",
  },
  in_correctBox: {
    backgroundColor: "#D00809",
    borderColor: "#D00809",
    borderWidth: 1,
  },
  in_correctText: {
    color: "#FFFFFF",
  },
  disableBox: {
    backgroundColor: "#FFFFFF",
    borderColor: "#3D7944",
    borderWidth: 1,
    opacity: 0.5,
  },
  disableText: {
    color: "#000",
    opacity: 0.5,
  },
});
