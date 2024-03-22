// GameEntryButtonList.js
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import GameEntryButton from "./GameEntryButton";
import AppStyles from "../styles/AppStyles";
import gameButtonDetails from "../constants/GameButtonDetails";

const GameEntryButtonList = () => {
  return (
    <View style={styles.view}>
      <ScrollView style={(flex = 1)}>
        {gameButtonDetails.map((game, index) => (
          <GameEntryButton
            key={index}
            buttonText={game.gameName}
            navpath={game.navpath}
            hasModes={game.hasModes}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 9,
    backgroundColor: AppStyles.default_primary_color,
    paddingVertical: 10,
  },
});

export default GameEntryButtonList;
