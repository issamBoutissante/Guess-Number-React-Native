import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TextTitle from "../screens/textTitle";

const header = (props) => (
  <View style={styles.header}>
    <TextTitle style={styles.title}>{props.title}</TextTitle>
  </View>
);
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f7287b",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
});
export default header;
