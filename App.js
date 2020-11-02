import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./component/header/header";
import StartGameScreen from "./component/screens/StartGameScreen/StartGameScreen";
import GameScreen from "./component/screens/StartGameScreen/GameScreen/GameScreen";
import GameOverScreen from "./component/screens/GameOverScreen/GameOverScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";
const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  const [numberGesses, setNumberGesses] = useState(0);
  const [number, setNumber] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  let content = <StartGameScreen setNumber={setNumber} />;
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onerror={(err) => console.log(err)}
      />
    );
  }
  const Restart = () => {
    setNumberGesses(0);
    setNumber(null);
  };
  const gameOverHandler = (nbrgesses) => {
    setNumberGesses(nbrgesses);
    console.log(numberGesses);
  };
  if (number && numberGesses <= 0) {
    content = <GameScreen number={number} onGameOver={gameOverHandler} />;
  } else if (numberGesses > 0) {
    content = (
      <GameOverScreen
        nbrOfRounds={numberGesses}
        userNumber={number}
        restart={Restart}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
