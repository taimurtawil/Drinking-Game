import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TruthOrDareHome = () => {
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

/*

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TruthOrDareHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Truth or Dare</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default TruthOrDareHome;
*/
