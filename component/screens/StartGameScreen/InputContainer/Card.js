import React from "react";
import { View, StyleSheet } from "react-native";
const Card = (props) => {
  return (
    <View style={{ ...styles.InputContainer, ...props.style }}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  InputContainer: {
    width: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    borderRadius: 8,
  },
});
export default Card;
