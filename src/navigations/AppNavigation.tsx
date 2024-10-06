import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "screens/Home";
import Welcome from "screens/Welcome";
import NftDetails from "screens/NftDetails";

export type RootStackParamList = {
  home: undefined;
  welcome: undefined;
  NftDetails: { id: string }; // Expecting an ID to be passed as a parameter
};

const Stack = createStackNavigator<RootStackParamList>();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="NftDetails" component={NftDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
