import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { NAV } from "../config/navigations";
import {Primary, Secondary,Tertiary, SpaceSmall, SpaceLarge, MaxHeight} from '../styles';

const styles = StyleSheet.create({
  text: {
    color: Tertiary,
    fontSize: 24,
    fontWeight: "bold"
  },
  buttonContainer: {
    backgroundColor: Primary,
    borderRadius: 5,
    padding: SpaceSmall,
    margin: SpaceLarge
  },
  buttonText: {
    fontSize: 20,
    color: Secondary
  },
  tabContainer: {
   flex: 1,
   flexDirection: "row",
   height: MaxHeight,
   maxHeight: MaxHeight
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
