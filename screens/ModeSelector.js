/*
Explained: This is the that will allow the user to choose the difficulty and then navigate to its respective game. 
The game that is selected from the home screen will route to this screen, if there are difficulty modes, and 
then this screen will route to the game screen, using the information in the ModeSelectorMetadata.js file.
*/

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ModeSelectorMetadata from "../constants/ModeSelectorMetadata"; // Ensure the path is correct for your project structure
import RulesButton from "../components/Rules"; // Adjust the import path as needed
import RulesMetadata from "../constants/RulesMetadata"; // Ensure the path is correct

const ModeSelector = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { game } = route.params;
  const gameData = ModeSelectorMetadata[game];
  const rulesExist = !!RulesMetadata[game];

  const handleModeSelection = (mode) => {
    navigation.navigate(gameData.navigationTarget, { mode });
  };

  return (
    <View style={styles.container}>
      {rulesExist && (
        <View style={styles.rulesButtonContainer}>
          <RulesButton game={game} />
          {/* Adjust as necessary to include the icon prop */}
        </View>
      )}
      {gameData.modes.map(({ title, mode }, index) => (
        <TouchableOpacity
          key={index}
          style={styles.modeButton}
          onPress={() => handleModeSelection(mode)}
          activeOpacity={0.7} // Optional: Adjusts the opacity of the button when pressed
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modeButton: {
    backgroundColor: "#007AFF", // A nice blue color for the button background
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25, // Rounded corners
    margin: 10, // Space between buttons
    width: 200, // Fixed width for all buttons
    alignItems: "center", // Center text horizontally
  },
  buttonText: {
    color: "white", // White color for the text
    fontSize: 16,
    fontWeight: "bold", // Make the text bold
  },
  rulesButtonContainer: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default ModeSelector;
