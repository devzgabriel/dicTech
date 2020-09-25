import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import PageHeader from "../../components/PageHeader";
import WordItem, { Word } from "../../components/WordItem";
import api from "../../services/api";

import styles from "./styles";
import { useFocusEffect } from "@react-navigation/native";

function WordList() {
  const [words, setWords] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState("");

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedWords = JSON.parse(response);
        const favoritedWordsIds = favoritedWords.map((word: Word) => {
          return word.id;
        });
        setFavorites(favoritedWordsIds);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get("classes", {
      params: {
        subject,
      },
    });

    setIsFiltersVisible(false);
    setWords(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Dicionário Técnico"
        headerRight={
          <BorderlessButton>
            <Feather
              onPress={handleToggleFiltersVisible}
              name="filter"
              size={20}
              color="#FFF"
            />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}> Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a palavra?"
              placeholderTextColor="#c1bccc"
            />

            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.wordList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {words.map((word: Word) => {
          return (
            <WordItem
              key={word.id}
              word={word}
              favorited={favorites.includes(word.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default WordList;
