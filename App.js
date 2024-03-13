import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import TopBanner from "./components/TopBanner";
import TruthOrDareHome from "./screens/TruthOrDareHome"; // Create this screen

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
