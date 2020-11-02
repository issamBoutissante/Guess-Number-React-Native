import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const myButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.background }}>
        <Text style={{ ...styles.text, ...props.text }}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    color: "white",
    fontSize: 17,
  },
});
export default myButton;
