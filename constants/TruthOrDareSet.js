const EasySet = {
  truths: [
    { text: "Sample Text 1t", type: "Truth" },
    // Add more sample truths here
  ],
  dares: [
    { text: "Sample Text 1d", type: "Dare" },
    // Add more sample dares here
  ],
};

const MediumSet = {
  truths: [
    { text: "Sample Text 2t", type: "Truth" },
    // Add more sample truths here
  ],
  dares: [
    { text: "Sample Text 2d", type: "Dare" },
    // Add more sample dares here
  ],
};

const HardSet = {
  truths: [
    { text: "Sample Text 3t", type: "Truth" },
    // Add more sample truths here
  ],
  dares: [
    { text: "Sample Text 3d", type: "Dare" },
    // Add more sample dares here
  ],
};

const SexySet = {
  truths: [
    { text: "Sample Text st", type: "Truth" },
    // Add more sample truths here
  ],
  dares: [
    { text: "Sample Text sd", type: "Dare" },
    // Add more sample dares here
  ],
};

export default { EasySet, MediumSet, HardSet, SexySet };

/* GPT prompt
const EasySet = [
  { text: "Sample Text 1t", type: "Truth" },
  { text: "Sample Text 1d", type: "Dare" },
  // Add more sample truths and dares here
];

const MediumSet = [
  { text: "Sample Text 2t", type: "Truth" },
  { text: "Sample Text 2d", type: "Dare" },
  // Add more sample truths and dares here
];

const HardSet = [
  { text: "Sample Text 3t", type: "Truth" },
  { text: "Sample Text 3d", type: "Dare" },
  // Add more sample truths and dares here
];

const SexySet = [
  { text: "Sample Text st", type: "Truth" },
  { text: "Sample Text sd", type: "Dare" },
  // Add more sample truths and dares here
];

above is TruthOrDareSet.js, which contains the metadata for the question sets. 

export default { EasySet, MediumSet, HardSet, SexySet };

const TruthOrDareHome = ({ navigation }) => {
  const navigation = useNavigation();
  const handleModeSelection = (mode) => {
    navigation.navigate("TruthOrDareGame", { mode });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Easy"
        onPress={() => handleModeSelection("Easy")}
        style={styles.button}
      />
      <Button
        title="Medium"
        onPress={() => handleModeSelection("Medium")}
        style={styles.button}
      />
      <Button
        title="Hard"
        onPress={() => handleModeSelection("Hard")}
        style={styles.button}
      />
      <Button
        title="Sexy"
        onPress={() => handleModeSelection("Sexy")}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginBottom: 10,
  },
});

export default TruthOrDareHome;

this is meant to navigate you to the truth or dare game itself, which will be stored in a separate file called TruthOrDareGame.js

build a game which accepts the mode passed to it as a prompt, and will display the 
*/
