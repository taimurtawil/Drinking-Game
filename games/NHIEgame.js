import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { easySet, mediumSet, hardSet } from "../constants/NHIEset";
import { shuffleArray } from "../helpers/HelperFunctions";

// Function to shuffle our NHIE questions

const NHIEgame = () => {
  const route = useRoute();
  const { mode } = route.params;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    let selectedSet = [];
    switch (mode) {
      case "Easy":
        selectedSet = easySet;
        break;
      case "Medium":
        selectedSet = mediumSet;
        break;
      case "Hard":
        selectedSet = hardSet;
        break;
      default:
        selectedSet = [];
    }

    // Shuffle the selected set and update state
    const shuffledQuestions = shuffleArray([...selectedSet]);
    setQuestions(shuffledQuestions);
    setQuestionIndex(0); // Reset index for new set
  }, [mode]);

  const handleNextQuestion = () => {
    // Move to next question, or reshuffle and start over if at the end
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Reshuffle and restart if at the end
      setQuestions(shuffleArray([...questions]));
      setQuestionIndex(0);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNextQuestion}
      activeOpacity={0.7}
    >
      {questions.length > 0 && (
        <View style={{ maxWidth: "80%" }}>
          <Text style={styles.questionText}>
            {questions[questionIndex].question}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34", // A dark background for contrast
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    fontSize: 24, // Larger text for easier reading
    color: "#FFFFFF", // White text for contrast against the dark background
    fontWeight: "bold", // Bold text to make it pop
    textAlign: "center",
    paddingHorizontal: 30, // Padding on the sides to keep text from the edges
    borderRadius: 10, // Rounded corners for the text container
    paddingVertical: 20, // Vertical padding for more space around the text
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight white overlay for depth
    shadowColor: "#000", // Shadow for a slight elevation effect
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default NHIEgame;
