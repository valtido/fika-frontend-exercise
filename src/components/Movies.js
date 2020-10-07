import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { IMAGE_BASE, MOVIES } from "../config/const";
import Tabs from "./Tabs";
import {SpaceSmall, MaxHeight, Thumbnail} from '../styles';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexGrow: 1
  },
  movies: {
    flex: 1,
    padding: SpaceSmall,
    maxHeight: MaxHeight
  },
  movie: {
    flex: 1,
    marginBottom: 10
  },
  poster: {
    width: Thumbnail,
    height: Thumbnail
  }
});
const Movies = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const request = await fetch(MOVIES);
    const json = await request.json();
    setMovies(json.results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.app}>
      <Tabs navigation={navigation} />
      <ScrollView style={styles.movies}>
        {movies?.map((movie) => (
          <View style={styles.movie}>
            <Text>{movie.original_title}</Text>
            <Image
              style={styles.poster}
              source={{
                uri: `${IMAGE_BASE}${movie.poster_path}`
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Movies;
