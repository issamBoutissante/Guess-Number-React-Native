import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";

export default function NumberContainer(props) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.selectedNumber}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  numberContainer: {
    borderColor: Colors.accent,
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  number: {
    color: Colors.accent,
    fontSize: 20,
  },
});
