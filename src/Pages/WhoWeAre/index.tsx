import React from "react";
import { View, ImageBackground, Text, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import PersonItem, { Person } from "../../components/PersonItem";

import whoWeAreImg from "../../assets/images/we-background.png";
import GabrielImg from "../../assets/photos/gabriel.jpg";
import SarahImg from "../../assets/photos/sarah.jpg";
import MoniqueImg from "../../assets/photos/monique.jpg";
import YasminImg from "../../assets/photos/yasmin.jpg";
import MarianaImg from "../../assets/photos/mariana.jpg";
import DefaultImg from "../../assets/photos/default.jpg";

import styles from "./styles";

const WhoWeAre = () => {
  const { goBack } = useNavigation();

  const handleNavigateBack = () => {
    goBack();
  };

  const we = [
    {
      avatar: GabrielImg,
      bio:
        "An eternal student looking for experience, but able to create solutions like a teacher!",
      name: "Roberto Gabriel Silva",
      occupation: "Programador",
    },
    {
      avatar: SarahImg,
      bio: "Student at ETE FMC",
      name: "Sarah Beatriz",
      occupation: "Programadora",
    },
    {
      avatar: DefaultImg,
      bio: "Student at ETE FMC",
      name: "Ana Luiza",
      occupation: "Programadora",
    },
    {
      avatar: MoniqueImg,
      bio: "Student at ETE FMC",
      name: "Monique",
      occupation: "Pesquisadora",
    },
    {
      avatar: YasminImg,
      bio: "Student at ETE FMC",
      name: "Yasmin",
      occupation: "Pesquisadora",
    },
    {
      avatar: MarianaImg,
      bio: "Student at ETE FMC",
      name: "Mariana",
      occupation: "Pesquisadora",
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={whoWeAreImg}
        resizeMode="contain"
        style={styles.content}
      >
        <Text style={styles.title}>Quem são os criadores?</Text>
        <ScrollView style={styles.personList}>
          {we.map((person: Person) => {
            return (
              <PersonItem
                key={person.name}
                avatar={person.avatar}
                bio={person.bio}
                name={person.name}
                occupation={person.occupation}
              />
            );
          })}
        </ScrollView>
        <RectButton onPress={handleNavigateBack} style={styles.okButton}>
          <Text style={styles.okButtonText}>Voltar</Text>
        </RectButton>
      </ImageBackground>
    </View>
  );
};

export default WhoWeAre;
