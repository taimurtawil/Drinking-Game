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
import TruthOrDareSets from "../constants/TruthOrDareSet";
import HelpPopUp from "../components/HelpPopUp"; // Import the HelpPopUp component

const TruthOrDareGame = () => {
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const [helpVisible, setHelpVisible] = useState(false); // State to control HelpPopUp visibility
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
      <TouchableOpacity
        style={styles.helpButton}
        onPress={() => setHelpVisible(true)}
      >
        <Text style={styles.helpButtonText}>Rules</Text>
      </TouchableOpacity>
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
      <HelpPopUp
        isVisible={helpVisible}
        onClose={() => setHelpVisible(false)}
        title="How to Play"
        text="Select 'Truth' for a truth question, 'Dare' for a dare, or 'Random' for either. Tap the screen to return to the options."
      />
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
  helpButton: {
    position: "absolute",
    right: 20,
    top: 20,
    padding: 10, // Make it easier to tap
  },
  helpButtonText: {
    fontSize: 24,
  },
});

export default TruthOrDareGame;

// import React, { useState, useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   Button,
//   TouchableOpacity,
//   StyleSheet,
//   Animated,
// } from "react-native";
// import { useRoute } from "@react-navigation/native";
// import TruthOrDareSets from "../constants/TruthOrDareSet"; // Update the import path accordingly
// import HelpPopUp from "../components/HelpPopUp";
// const TruthOrDareGame = () => {
//   const [currentPrompt, setCurrentPrompt] = useState(null);
//   const opacity = useRef(new Animated.Value(0)).current; // Initialize Animated.Value
//   const route = useRoute();
//   const { mode } = route.params;
//   const modeSet = TruthOrDareSets[`${mode}Set`];

//   // Trigger the animation whenever currentPrompt changes
//   useEffect(() => {
//     if (currentPrompt) {
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       opacity.setValue(0); // Reset opacity when going back to selection
//     }
//   }, [currentPrompt, opacity]);

//   const selectPrompt = (type) => {
//     let prompt;
//     if (type === "Random") {
//       const randomType = Math.random() < 0.5 ? "truths" : "dares";
//       prompt =
//         modeSet[randomType][
//           Math.floor(Math.random() * modeSet[randomType].length)
//         ];
//     } else {
//       prompt =
//         modeSet[type.toLowerCase() + "s"][
//           Math.floor(Math.random() * modeSet[type.toLowerCase() + "s"].length)
//         ];
//     }
//     setCurrentPrompt(prompt);
//   };

//   return (
//     <View style={styles.fullScreenContainer}>
//       {currentPrompt ? (
//         <TouchableOpacity
//           style={styles.fullScreenTouchable}
//           onPress={() => setCurrentPrompt(null)}
//         >
//           <Animated.View style={{ opacity }}>
//             <Text style={styles.promptText}>{currentPrompt.text}</Text>
//           </Animated.View>
//         </TouchableOpacity>
//       ) : (
//         <View style={styles.optionsContainer}>
//           <Button title="Truth" onPress={() => selectPrompt("Truth")} />
//           <Button title="Dare" onPress={() => selectPrompt("Dare")} />
//           <Button title="Random" onPress={() => selectPrompt("Random")} />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   fullScreenContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   fullScreenTouchable: {
//     flex: 1,
//     width: "100%", // Ensure it spans the entire width
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   optionsContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   promptText: {
//     fontSize: 24,
//     textAlign: "center",
//     margin: 20,
//   },
// });

// export default TruthOrDareGame;
