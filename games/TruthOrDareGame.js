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
import TruthOrDareSets from "../constants/TruthOrDareData/TruthOrDareSet";
import { selectPunishment } from "../constants/TruthOrDareData/TruthOrDarePunishments"; // Adjust path as necessary

const TruthOrDareGame = () => {
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const opacity = useRef(new Animated.Value(0)).current;
  const route = useRoute();
  const { mode } = route.params;
  const modeSet = TruthOrDareSets[`${mode}Set`];
  const [viewState, setViewState] = useState("prompt"); // 'prompt', 'success', or 'fail'
  const [punishment, setPunishment] = useState("");
  const scaleAnim = useRef(new Animated.Value(0)).current; // For "popping" effect
  const translateXAnim = useRef(new Animated.Value(300)).current; // Start off-screen to the right

  useEffect(() => {
    if (currentPrompt) {
      // Popping animation for the header
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2, // Slightly larger than normal
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Back to normal size
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();

      // Sliding animation for the prompt and buttons
      Animated.timing(translateXAnim, {
        toValue: 0, // Slide in from the right to original position
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Reset animations if there's no current prompt
      scaleAnim.setValue(0);
      translateXAnim.setValue(300); // Reset to off-screen right
    }
  }, [currentPrompt, scaleAnim, translateXAnim]);

  const handleSuccess = () => {
    setViewState("prompt");
    setCurrentPrompt(null);
  };

  const handleFail = () => {
    const punishmentText = selectPunishment(mode);
    setPunishment(punishmentText);
    setViewState("fail");
  };

  // useEffect(() => {
  //   if (currentPrompt) {
  //     Animated.timing(opacity, {
  //       toValue: 1,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start();
  //   } else {
  //     opacity.setValue(0);
  //   }
  // }, [currentPrompt, opacity]);

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
      {/* Selection view */}
      {viewState === "prompt" && !currentPrompt && (
        <View style={styles.optionsContainer}>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.choiceButton}
              onPress={() => selectPrompt("Truth")}
            >
              <Text style={styles.buttonText}>Truth</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.choiceButton}
              onPress={() => selectPrompt("Dare")}
            >
              <Text style={styles.buttonText}>Dare</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.randomButton}
            onPress={() => selectPrompt("Random")}
          >
            <Text style={styles.buttonText}>Random</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Prompt view with success/fail options */}
      {viewState === "prompt" && currentPrompt && (
        <View style={styles.promptContainer}>
          <Animated.Text
            style={[styles.headerText, { transform: [{ scale: scaleAnim }] }]}
          >
            {currentPrompt.type}
          </Animated.Text>
          <Animated.View
            style={{ transform: [{ translateX: translateXAnim }] }}
          >
            <Text style={styles.promptText}>{currentPrompt.text}</Text>
            <View style={styles.outcomeButtons}>
              <TouchableOpacity
                style={styles.choiceButton}
                onPress={handleSuccess}
              >
                <Text style={styles.buttonText}>Success</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.choiceButton}
                onPress={handleFail}
              >
                <Text style={styles.buttonText}>Fail</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      )}

      {/* Punishment view */}
      {viewState === "fail" && (
        <Animated.View style={{ transform: [{ translateX: translateXAnim }] }}>
          <TouchableOpacity
            style={styles.fullScreenTouchable}
            onPress={() => {
              setViewState("prompt");
              setCurrentPrompt(null);
              opacity.setValue(0); // Reset opacity for next animation
              translateXAnim.setValue(300); // Reset translateX for next animation
            }}
          >
            <Text style={styles.promptText}>{punishment}</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // Needed for absolute positioning of the help button
  },
  fullScreenTouchable: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  optionsContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  promptText: {
    fontSize: 24,
    textAlign: "center",
    margin: 20,
  },
  promptContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  choiceButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10, // Adjust spacing between buttons
  },
  randomButton: {
    backgroundColor: "#34A853",
    padding: 10,
    borderRadius: 20,
    marginTop: 20, // Space above the random button
    alignSelf: "center", // Center the button
  },
  outcomeButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default TruthOrDareGame;

/*
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
import TruthOrDareSets from "../constants/TruthOrDareData/TruthOrDareSet";

const TruthOrDareGame = () => {
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const opacity = useRef(new Animated.Value(0)).current;
  const route = useRoute();
  const { mode } = route.params;
  const modeSet = TruthOrDareSets[`${mode}Set`];

  useEffect(() => {
    if (currentPrompt) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      opacity.setValue(0);
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
    position: "relative", // Needed for absolute positioning of the help button
  },
  fullScreenTouchable: {
    flex: 1,
    width: "100%",
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
*/
