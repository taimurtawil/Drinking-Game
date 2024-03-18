import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NHIEmodes = () => {
  const navigation = useNavigation();
  const handleModeSelection = (mode) => {
    navigation.navigate("NHIEgame", { mode });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Tame"
        onPress={() => handleModeSelection("Easy")}
        style={styles.button}
      />
      <Button
        title="Regular"
        onPress={() => handleModeSelection("Medium")}
        style={styles.button}
      />
      <Button
        title="Hardcore"
        onPress={() => handleModeSelection("Hard")}
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

export default NHIEmodes;
