import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import TruthOrDareHome from "./screens/TruthOrDareHome"; // Create this screen
import TruthOrDareGame from "./games/TruthOrDareGame"; // Make sure to import TruthOrDareGame

const Stack = createNativeStackNavigator(); //this is the stack navigator for navigating between screens

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* keep this first so its shown by default*/}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="TruthOrDare"
          component={TruthOrDareHome}
          options={{ title: "Truth or Dare" }}
        />
        <Stack.Screen
          name="TruthOrDareGame" // This is the game screen where truths or dares are displayed
          component={TruthOrDareGame}
          options={{ title: "Play" }} // Optionally, adjust the title or add more options
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//the default app component code
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text></Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
