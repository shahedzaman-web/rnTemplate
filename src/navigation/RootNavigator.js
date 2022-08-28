import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../view/Home/Home";
import Login from "../view/Login/Login";

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
