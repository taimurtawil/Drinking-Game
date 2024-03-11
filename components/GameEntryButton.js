import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import AppStyles from "../styles/AppStyles";

const GameEntryButton = ({ onPress, style, buttonText }) => {
  //if an onPress is passed (a function that will cause the user to enter the game),
  //then the onPress function will be called when the button is pressed.
  //if not, then a default alert will be shown.
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      alert(`${buttonText} button clicked!`);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppStyles.default_secondary_color,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: AppStyles.default_primary_color,
    fontFamily: AppStyles.default_font_family,
    fontSize: AppStyles.default_font_size,
    fontWeight: "bold",
  },
});

export default GameEntryButton;
