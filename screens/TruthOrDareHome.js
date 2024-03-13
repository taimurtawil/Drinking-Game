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
