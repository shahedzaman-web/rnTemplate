import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./src/navigation/RootNavigator";

function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;
