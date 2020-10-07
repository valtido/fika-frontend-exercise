import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { GENERES } from "../config/const";
import Tabs from "./Tabs";

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexGrow: 1
  },
  tab: {
    flex: 1,
    height: 30
  }
});
const Movies = ({ navigation }) => {
  const [genres, setGeneres] = useState([]);

  async function getGeneres() {
    const request = await fetch(GENERES);
    const json = await request.json();
    setGeneres(json.genres);
  }

  useEffect(() => {
    getGeneres();
  }, []);

  return (
    <View style={styles.app}>
      <Tabs navigation={navigation} />

      <ScrollView style={styles.genres}>
        {genres?.map((genre) => (
          <View style={styles.genre} key={genre.id}>
            <Text>{genre.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Movies;
