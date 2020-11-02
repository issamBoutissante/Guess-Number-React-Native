import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import NumberContainer from "../InputContainer/NumberContainer";
import Card from "../../StartGameScreen/InputContainer/Card";
import TextTitle from "../../textTitle";
import MyButton from "../../../MyButton";
import Colors from "../../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import TextBody from "../../TextBody";

const renderItem = (length, itemData) => {
  return (
    <View style={styles.listItem}>
      <TextBody>#{length - itemData.index}</TextBody>
      <TextBody>{itemData.item}</TextBody>
    </View>
  );
};

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rnd = Math.random() * (max - min) + min;
  if (rnd === exclude) {
    generateRandomNumber = (min, max, exclude);
  } else {
    return Math.floor(rnd);
  }
};

export default function GameScreen(props) {
  const { number, onGameOver } = props;
  useEffect(() => {
    if (number === gessedNum) {
      onGameOver(pastGesses.length);
    }
  });
  const [gessedNum, setGessedNum] = useState(
    generateRandomNumber(1, 100, props.number)
  );
  const [pastGesses, setPastGesses] = useState([gessedNum]);
  const lowerRef = useRef(1);
  const greaterRef = useRef(100);
  const giveHint = (direction) => {
    if (
      (direction === "Lower" && gessedNum <= props.number) ||
      (direction === "Greater" && gessedNum >= props.number)
    ) {
      Alert.alert("Don't lie", "You know that its wrong", [
        { title: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "Greater") {
      lowerRef.current = gessedNum;
    } else {
      greaterRef.current = gessedNum;
    }
    let nextNum = generateRandomNumber(
      lowerRef.current,
      greaterRef.current,
      gessedNum
    );
    setGessedNum(nextNum);
    setPastGesses((current) => [nextNum, ...current]);
  };
  return (
    <View style={styles.container}>
      <TextTitle style={styles.text}>Computer Gess !</TextTitle>
      <NumberContainer selectedNumber={gessedNum} />

      <Card style={styles.btncontainer}>
        <MyButton
          onPress={giveHint.bind(this, "Greater")}
          background={{ ...styles.btn, ...styles.buttons }}
        >
          <Ionicons name="md-add" size={25} />
        </MyButton>
        <MyButton
          onPress={giveHint.bind(this, "Lower")}
          background={styles.buttons}
        >
          <Ionicons name="md-remove" size={25} />
        </MyButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGesses.map((gess, i) => {
            //return <Text>{gess}</Text>;
            return renderItem(gess, pastGesses.length - i);
          })}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item.toString()}
          data={pastGesses}
          renderItem={renderItem.bind(this, pastGesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  btncontainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  text: {
    color: "red",
  },
  btn: {
    backgroundColor: Colors.accent,
  },
  buttons: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  listItem: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    width: "100%",
  },
  listContainer: {
    flex: 1,
    width: "60%",
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
});
