import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { NAV } from "../config/navigations";

const styles = StyleSheet.create({
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold"
  },
  buttonContainer: {
    backgroundColor: "#222",
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: "#fff"
  },
  tabContainer: {
   flex: 1,
   flexDirection: "row",
   height: 90,
   maxHeight: 90
  }
});
const TabsScreen = ({ navigation }) => (
  <View style={styles.tabContainer}>
    {Object.keys(NAV).map((key) => (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate(NAV[key])}
      >
        <Text style={styles.buttonText}>{NAV[key]}</Text>
      </TouchableOpacity>
    ))}
  </View>
);
export default TabsScreen;
