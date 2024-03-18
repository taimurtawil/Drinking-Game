import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import AppStyles from "../styles/AppStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window"); // Correctly get screen width and height

const GameEntryButton = ({ onPress, buttonText }) => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(1)); // Initial opacity is 1

  const handlePressIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
    switch (buttonText) {
      case "Truth or Dare":
        navigation.navigate("TruthOrDare");
        break;
      case "Never Have I Ever":
        navigation.navigate("NHIEmodes");
        break;
      default:
        alert(`${buttonText} button clicked!`);
    }
  };

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.button}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        style={styles.touchable}
      >
        <Animated.View style={{ flex: 1, width: "100%", opacity: fadeAnim }}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Animated.View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    height: height * 0.15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
  },
  touchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: AppStyles.default_font_family,
    fontSize: width * 0.05,
    fontWeight: "bold",
    paddingHorizontal: width * 0.2,
    textAlign: "center",
  },
});

export default GameEntryButton;
