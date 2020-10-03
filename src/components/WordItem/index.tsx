import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
// import api from "../../services/api";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";

import styles from "./styles";

export interface Word {
  id: number;
  example: string;
  expression: string;
  translation: string;
}

interface WordItemProps {
  word: Word;
  favorited: boolean;
}

const WordItem: React.FC<WordItemProps> = ({ word, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((wordItem: Word) => {
        return wordItem.id === word.id;
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      favoritesArray.push(word);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.expression}>{word.expression}</Text>
          <Text style={styles.translation}> {word.translation} </Text>
        </View>
      </View>

      <Text style={styles.example}>{word.example}</Text>

      <View style={styles.footer}>
        <RectButton
          onPress={handleToggleFavorite}
          style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
        >
          {isFavorited ? (
            <Image source={unfavoriteIcon} />
          ) : (
            <Image source={heartOutlineIcon} />
          )}
        </RectButton>
      </View>
    </View>
  );
};

export default WordItem;
