import React, { useEffect,useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert,Dimensions } from "react-native";
import Colors from "../../../../constants/Colors";
import Card from "./Card";
import TextBody from "../../TextBody";
import MyButton from "../../../MyButton";

export default function InputContainer(props) {
  const [text, setText] = useState("");
  const [btnWidth,setBtnWidth]=useState(Dimensions.get('window').width/4)

  const onChangeHandler = (enterdText) => {
    // there is a problem with this regular expression (doesn't work)
    setText(enterdText.replace(/[^0-9]/, ""));
  };
  const onResetHandler = () => {
    setText("");
    props.setConfirmed(false);
  };
  const onConfirmHandler = () => {
    const chosedNumber = parseInt(text);
    if (isNaN(chosedNumber) || chosedNumber === 0) {
      Alert.alert("warning!!!", "the number has to be between 1 and 99", [
        { title: "OK", style: "destructive", onPress: onResetHandler },
      ]);
      return;
    }
    props.setConfirmed(true);
    props.setSelectedNumber(chosedNumber);
    setText("");
  };
  useEffect(() => {
    const updateWidth=()=>{
      setBtnWidth(Dimensions.get('window').width/4)
    }
    Dimensions.addEventListener('change',updateWidth)
    return () => {
      Dimensions.removeEventListener('change',updateWidth)
    }
  })
  return (
    <Card>
      <TextBody>select a number</TextBody>
      <TextInput
        style={styles.input}
        blurOnSubmit
        keyboardType="phone-pad"
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeHandler}
        value={text}
      ></TextInput>
      <View style={styles.buttonContainer}>
        <MyButton
          onPress={onResetHandler}
          background={{ ...styles.btn, ...styles.buttons,width:btnWidth }}
        >
          Reset
        </MyButton>
        <MyButton onPress={onConfirmHandler} background={{...styles.buttons,width:btnWidth}}>
          Confirm
        </MyButton>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    width: "100%",
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    width: 50,
    textAlign: "center",
  },
  btn: {
    backgroundColor: Colors.accent,
  },
  buttons: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    alignItems:'center'
  },
});
