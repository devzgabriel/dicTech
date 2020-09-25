import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import PageHeader from "../../components/PageHeader";
import WordItem, { Word } from "../../components/WordItem";
import styles from "./styles";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedWords = JSON.parse(response);

        setFavorites(favoritedWords);
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Palavras Favoritas" />

      <ScrollView
        style={styles.wordList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((word: Word) => {
          return <WordItem key={word.id} word={word} favorited={true} />;
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;
