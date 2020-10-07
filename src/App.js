import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MoviesScreen from "./components/Movies";
import GenresScreen from "./components/Genres";
import { NAV } from "./config/navigations";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen
          name={NAV.MOVIES}
          component={MoviesScreen}
          options={{ title: "Movies" }}
        />
        <Stack.Screen
          name={NAV.GENRES}
          component={GenresScreen}
          options={{ title: "Genres" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
