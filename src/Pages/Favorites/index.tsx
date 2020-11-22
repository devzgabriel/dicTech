import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import PageHeader from "../../components/PageHeader";
import WordItem, { FileData } from "../../components/WordItem";
import landingImg from "../../assets/images/landing.png";

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

      {favorites.length === 0 && (
        <View style={styles.wait}>
          <Text style={styles.waitText}>
            Você não possui palavras salvas recentemente!
          </Text>
          <Image source={landingImg} />
        </View>
      )}

      <ScrollView
        style={styles.wordList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((word: FileData) => {
          return (
            <WordItem
              key={Number(word.id)}
              word={word}
              favorited={true}
              hideFavoriteButton={true}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;
