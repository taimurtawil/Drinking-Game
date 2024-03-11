import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import TopBanner from "../components/TopBanner";
import AppStyles from "../styles/AppStyles";
import GameEntryButtonList from "../components/GameEntryButtonList";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBanner />
      <GameEntryButtonList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
