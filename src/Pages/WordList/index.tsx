import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import * as FileSystem from "expo-file-system";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import Papa from "papaparse";

import PageHeader from "../../components/PageHeader";
import WordItem, { FileData } from "../../components/WordItem";

import styles from "./styles";

interface FileParsed {
  data: Array<{
    id: string;
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
  // const filePath = "../../data/dictionary.csv";
  const filePath = `${FileSystem.documentDirectory}`;

  const [fileParsed, setFileParsed] = useState<FileParsed>({} as FileParsed);
  const [toprint, setToPrint] = useState("" as any); //Só para testes

  const [data, setData] = useState<FileData[]>([]); // Um array com vários objetos dentro
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [search, setSearch] = useState("");

  async function loadData() {
    const localData = [
      {
        id: "1",
        name: "Thermistor",
        syllabicdivision: "Ther-mis-tor",
        primarymeaning: "Termistor",
        primaryexample:
          "Thermistors are easy to use, inexpensive, sturdy, and respond predictably to changes intemperature.",
        primaryreference: "https://www.teamwavelength.com/thermistor-basics/",
        secondarymeaning: "",
        secondaryexample: "",
        secondaryreference: "",
      },
      {
        id: "2",
        name: "Equipment",
        syllabicdivision: "E-quip-ment",
        primarymeaning: "Equipamento",
        primaryexample:
          "Portable and mobile RF communications equipment can affect the performance of the700 Series Ventilator System.",
        primaryreference:
          "https://www.moodlerje.com.br/pluginfile.php/888689/mod_page/content/4/700Series_ServiceManual_EN_10070389B00.pdf",
        secondarymeaning: "",
        secondaryexample: "",
        secondaryreference: "",
      },
    ];
    setData(localData);
    console.log(data);
    // const file = await FileSystem.readAsStringAsync(filePath);
    // setToPrint(file);
    // const file = await FileSystem.getInfoAsync(filePath);
    // const data = await FileSystem.readAsStringAsync(file.uri);
    // Papa.parse(file, {
    //   header: true,
    //   skipEmptyLines: true,
    //   complete: (results: FileParsed) => {
    //     setFileParsed({
    //       data: results.data,
    //       errors: results.errors,
    //       meta: results.meta,
    //     });
    //   },
    // });
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
  }, []);

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
      <Text> {toprint} </Text>
      <ScrollView
        style={styles.wordList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {data &&
          data.map((data: FileData) => {
            return (
              <WordItem
                key={data.id}
                word={data}
                favorited={favorites.includes(Number(data.id))}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}

export default WordList;
