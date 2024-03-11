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
  topBannerContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 9,
    backgroundColor: AppStyles.default_primary_color,
  },
});

export default HomeScreen;
