import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import * as FileSystem from "expo-file-system";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import Papa from "papaparse";

import PageHeader from "../../components/PageHeader";
import WordItem, { Word } from "../../components/WordItem";

import styles from "./styles";

interface FileParsed {
  data: Array<{
    id: number;
    name: string;
    syllabicdivision: string;
    primarymeaning: string;
    primaryexample: string;
    primaryreference: string;
    secondarymeaning: string;
    secondaryexample: string;
    secondaryreference: string;
  }>;
  errors: Array<{}>;
  meta: {
    delimiter: string;
    linebreak: string;
    aborted: boolean;
    truncated: boolean;
    cursor: number;
    fields: Array<string>;
  };
}

function WordList() {
  const filePath = "../../data/dictionary.csv";

  const [fileParsed, setFileParsed] = useState<FileParsed>({} as any);

  const [words, setWords] = useState([]); // Um array com vários objetos dentro
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [search, setSearch] = useState("");

  async function loadWords() {
    await FileSystem.readAsStringAsync(filePath)
      .then((file: any) => {
        console.log(file);
      })
      .catch(() => loadWords());
    // Papa.parse(file, {
    //   header: true,
    //   skipEmptyLines: true,
    //   complete: (results: FileParsed) => {
    //     setFileParsed({
    //       data: results.data,
    //       errors: results.errors,
    //       meta: results.meta,
    //     });
    //     // fileParsed.data = results.data;
    //     // fileParsed.errors = results.errors;
    //     // fileParsed.meta = results.meta;
    //   },
    // });
    console.log(fileParsed);
  }

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
    loadWords();
    // loadFavorites();
  });

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    // logica para filtro
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
              color="#2f2b5c"
            />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}> Expressão</Text>
            <TextInput
              style={styles.input}
              value={search}
              onChangeText={(text) => setSearch(text)}
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
