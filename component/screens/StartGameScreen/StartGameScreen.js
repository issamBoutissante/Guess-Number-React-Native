import React, { useEffect, useState } from "react";
import TextTitle from "../textTitle";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import InputContainer from "./InputContainer/InputContainer";
import ChosedNumber from "./InputContainer/ChosedNumber";

const StartGameScreen = (props) => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);
  let choosed = null;
  if (confirmed) {
    choosed = (
      <ChosedNumber
        selectedNumber={selectedNumber}
        setNumber={props.setNumber}
      />
    );
  }
  return (
    <ScrollView contentContainerStyle={{paddingBottom:10}}>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <TextTitle style={styles.gametitle}>Start a New Game</TextTitle>
        <InputContainer
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setConfirmed={setConfirmed}
        />
        {choosed}
      </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  gametitle: {
    fontSize: 20,
    paddingTop: 20,
  },
});
export default StartGameScreen;
