import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import TextTitle from "../textTitle";
import TextBody from "../TextBody";
import Colors from "../../../constants/Colors";
import MyButton from "../../MyButton";
import { ScreenOrientation } from "expo";

export default function GameOverScreen(props) {
  //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  const { nbrOfRounds, userNumber, restart } = props;
  return (
    <ScrollView contentContainerStyle={styles.scroller}>
      <TextTitle style={styles.text}>The Game is Over</TextTitle>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        ></Image>
      </View>
      <View style={styles.textResultContainer}>
        <TextBody style={styles.textResult}>
          Your phone needed <Text style={styles.highlight}>{nbrOfRounds} </Text>
          to guess the number <Text style={styles.highlight}>{userNumber}</Text>
        </TextBody>
      </View>
      <MyButton onPress={restart}>Play Again</MyButton>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scroller: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 20,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary,
  },
  textResult: {
    fontSize: 20,
    textAlign: "center",
  },
  textResultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
});
