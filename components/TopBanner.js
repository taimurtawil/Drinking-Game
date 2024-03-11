import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import AppStyles from "../styles/AppStyles";

export const TopBanner = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.banner}>
        <Text style={styles.text}>Drinking Game</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.default_secondary_color,
  },
  banner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: AppStyles.default_primary_color,
    fontFamily: AppStyles.default_font_family,
  },
});

export default TopBanner;
