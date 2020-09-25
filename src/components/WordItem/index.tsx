import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
// import api from "../../services/api";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

export interface Word {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface WordItemProps {
  word: Word;
  favorited: boolean;
}

const WordItem: React.FC<WordItemProps> = ({ word, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    let noblank = 1;
  }

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
        <Image style={styles.avatar} source={{ uri: word.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{word.name}</Text>
          <Text style={styles.subject}> {word.subject} </Text>
        </View>
      </View>

      <Text style={styles.bio}>{word.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"  "}
          <Text style={styles.priceValue}>{word.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
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

          <RectButton
            onPress={handleLinkToWhatsapp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>WhatsApp</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default WordItem;
