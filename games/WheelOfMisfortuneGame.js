import React, { useState, useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import WheelOfMisfortune from "../components/WheelOfMisfortune"; // Adjust the import path as needed

const WheelOfMisfortuneGame = ({ punishments }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedPunishment, setSelectedPunishment] = useState("");
  const scaleAnim = useRef(new Animated.Value(1)).current; // Animated value for text scaling

  // Function to start spinning the wheel
  const startSpin = () => {
    setIsSpinning(true);
    setSelectedPunishment(""); // Clear previous punishment
  };

  // Function to handle when spinning ends
  const handleSpinEnd = (punishment) => {
    setIsSpinning(false);
    setSelectedPunishment(punishment);
    startAnimation(); // Restart the animation for the result text
  };

  // Animation: text continuously becoming smaller and larger
  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1, // Infinite loop
      }
    ).start();
  };

  useEffect(() => {
    startAnimation(); // Start the animation when the component mounts
  }, []);

  return (
    <View style={styles.container}>
      {!isSpinning && !selectedPunishment && (
        <Animated.Text
          style={[
            styles.clickToSpinText,
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          Click to spin
        </Animated.Text>
      )}
      <WheelOfMisfortune
        punishments={punishments}
        onSpinStart={startSpin}
        onSpinEnd={handleSpinEnd}
      />
      {!isSpinning && selectedPunishment && (
        <Animated.Text
          style={[styles.resultText, { transform: [{ scale: scaleAnim }] }]}
        >
          {selectedPunishment}
        </Animated.Text>
      )}
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
  clickToSpinText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultText: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WheelOfMisfortuneGame;
