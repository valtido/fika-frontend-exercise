import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MoviesScreen from "./components/Movies";
import GenresScreen from "./components/Genres";
import { NAV } from "./config/navigations";

import { Primary, Secondary } from "./styles/index";
console.log(Primary)
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Primary
          },
          headerTintColor: Secondary,
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen
          name={NAV.MOVIES}
          component={MoviesScreen}
          options={{ title: NAV.MOVIES }}
        />
        <Stack.Screen
          name={NAV.GENRES}
          component={GenresScreen}
          options={{ title: NAV.GENRES }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
