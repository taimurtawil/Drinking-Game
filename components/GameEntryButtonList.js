import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import GameEntryButton from "./GameEntryButton";
import AppStyles from "../styles/AppStyles";
import gameButtonDetails from "../constants/GameButtonDetails";
/**
 * Renders a list of game entry buttons to be displayed on the home screen (bottom 90 percent).
 *
 *
 * @param {Object} props - The component props.
 * @param {Array} props.gameEntries - An array of objects, where each objects contains the props (text and function to be called when clicked) for a GameEntryButton.
 * @returns {JSX.Element} The rendered component.
 */
const GameEntryButtonList = () => {
  const gameEntries = gameButtonDetails; //imported from constants folder.
  return (
    <View style={styles.view}>
      <ScrollView>
        {gameEntries.map((entry, index) => (
          <GameEntryButton
            key={index}
            onPress={entry.onPress}
            buttonText={entry.gameName}
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
    paddingVertical: 10, //further padding around the list itself
  },
});
export default GameEntryButtonList;
