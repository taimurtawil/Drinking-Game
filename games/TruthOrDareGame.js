import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import TruthOrDareSets from "../constants/TruthOrDareSet"; // Update the import path accordingly

const TruthOrDareGame = () => {
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const opacity = useRef(new Animated.Value(0)).current; // Initialize Animated.Value
  const route = useRoute();
  const { mode } = route.params;
  const modeSet = TruthOrDareSets[`${mode}Set`];

  // Trigger the animation whenever currentPrompt changes
  useEffect(() => {
    if (currentPrompt) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      opacity.setValue(0); // Reset opacity when going back to selection
    }
  }, [currentPrompt, opacity]);

  const selectPrompt = (type) => {
    let prompt;
    if (type === "Random") {
      const randomType = Math.random() < 0.5 ? "truths" : "dares";
      prompt =
        modeSet[randomType][
          Math.floor(Math.random() * modeSet[randomType].length)
        ];
    } else {
      prompt =
        modeSet[type.toLowerCase() + "s"][
          Math.floor(Math.random() * modeSet[type.toLowerCase() + "s"].length)
        ];
    }
    setCurrentPrompt(prompt);
  };

  return (
    <View style={styles.fullScreenContainer}>
      {currentPrompt ? (
        <TouchableOpacity
          style={styles.fullScreenTouchable}
          onPress={() => setCurrentPrompt(null)}
        >
          <Animated.View style={{ opacity }}>
            <Text style={styles.promptText}>{currentPrompt.text}</Text>
          </Animated.View>
        </TouchableOpacity>
      ) : (
        <View style={styles.optionsContainer}>
          <Button title="Truth" onPress={() => selectPrompt("Truth")} />
          <Button title="Dare" onPress={() => selectPrompt("Dare")} />
          <Button title="Random" onPress={() => selectPrompt("Random")} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fullScreenTouchable: {
    flex: 1,
    width: "100%", // Ensure it spans the entire width
    alignItems: "center",
    justifyContent: "center",
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  promptText: {
    fontSize: 24,
    textAlign: "center",
    margin: 20,
  },
});

export default TruthOrDareGame;
