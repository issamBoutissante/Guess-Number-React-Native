import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

const titleText = (props) => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
  },
});
export default titleText;
