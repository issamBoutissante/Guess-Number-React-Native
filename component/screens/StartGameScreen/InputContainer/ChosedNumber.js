import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Card from "./Card";
import numberContainer from "./NumberContainer";
import NumberContainer from "./NumberContainer";
import MyButton from "../../../MyButton";

function ChosedNumber(props) {
  return (
    <Card style={styles.container}>
      <Text>You Selected</Text>
      <NumberContainer selectedNumber={props.selectedNumber} />
      <MyButton
        onPress={() => {
          props.setNumber(props.selectedNumber);
        }}
      >
        Start Game
      </MyButton>
    </Card>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "60%",
  },
});
export default ChosedNumber;
