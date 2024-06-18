import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import WebScreen from "./screens/WebScreen";
import AnotherScreen from "./screens/AnotherScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "HEM",
            headerStyle: {
              backgroundColor: "#65508C",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Web"
          component={WebScreen}
          options={{
            title: "FLYG INFO",
            headerStyle: {
              backgroundColor: "#9FDEE8",
            },
          }}
        />
        <Stack.Screen
          name="AnotherScreen"
          component={AnotherScreen}
          options={{
            title: "MER INFO",
            headerStyle: {
              backgroundColor: "#9FDEE8",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
