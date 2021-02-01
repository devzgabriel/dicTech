import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, TextInput } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import Papa from "papaparse";

import PageHeader from "../../components/PageHeader";
import WordItem, { FileData } from "../../components/WordItem";
import Dictionary from "../../data/exportDictionary";

import landingImg from "../../assets/images/landing.png";
import styles from "./styles";

export interface FileParsed {
  data: Array<{
    id: string;
    name: string;
    syllabicdivision: string;
    primarymeaning: string;
    primaryexample?: string;
    primaryreference: string;
    secondarymeaning?: string;
    secondaryexample?: string;
    secondaryreference?: string;
    __parsed_extra?: any;
  }>;
  errors: Array<{}>;
  meta: {
    delimiter?: string;
    linebreak?: string;
    aborted?: boolean;
    truncated?: boolean;
    cursor?: number;
    fields?: Array<string>;
  };
}

function WordList() {
  // const filePath = "../../data/dictionary.csv";
  // const filePath = `${FileSystem.documentDirectory}`;

  const [fileParsed, setFileParsed] = useState<FileParsed>({} as FileParsed);

  const [data, setData] = useState<FileData[]>([]); // Um array com vários objetos dentro
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [isResetSearchVisible, setIsResetSearchVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [wait, setWait] = useState(true);

  async function loadData() {
    const localData = Dictionary().data;
    setData(localData);
    // console.log(data);
  }

  async function loadFavorites() {
    await AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedWords = JSON.parse(response);
        const favoritedWordsIds = favoritedWords.map((word: FileData) => {
          return Number(word.id);
        });
        setFavorites(favoritedWordsIds);
      }
    });
  }

  useEffect(() => {
    loadData();
    loadFavorites();
    setWait(false);
  }, []);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  function handleFiltersSubmit() {
    loadFavorites();
    let searchArray: any[] = [];

    data.forEach((element) => {
      if (element.name.indexOf(search.toLowerCase()) > -1) {
        searchArray.push(element);
      }
    });

    if (searchArray.length !== 0) {
      setData(searchArray);
    } else if (searchArray.length === 0) {
    }

    setIsFiltersVisible(false);
    setIsResetSearchVisible(true);
  }

  function handleResetFilter() {
    setIsResetSearchVisible(false);
    loadData();
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
      {wait && (
        <View style={styles.wait}>
          <Text style={styles.waitText}>
            Aguarde enquanto carregamos as palavras!
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
        {isResetSearchVisible && (
          <BorderlessButton
            style={styles.resetSearch}
            onPress={handleResetFilter}
          >
            <Text style={styles.submitButtonText}>Retirar Filtro</Text>
          </BorderlessButton>
        )}
        {data &&
          data.map((data: FileData) => {
            // console.log(data.name, favorites.includes(Number(data.id)));
            // console.log(word.name, "favorited: ", favorited);
            return (
              <WordItem
                key={data.id}
                word={data}
                favorited={favorites.includes(Number(data.id))}
                hideFavoriteButton={false}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}

export default WordList;
