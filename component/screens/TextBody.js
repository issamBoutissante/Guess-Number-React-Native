import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const TextBody = (props) => (
  <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
);
const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});
export default TextBody;
