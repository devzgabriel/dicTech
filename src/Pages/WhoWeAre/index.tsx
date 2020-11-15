import React from "react";
import { View, ImageBackground, Text, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import PersonItem, { Person } from "../../components/PersonItem";
import People from "../../data/exportPeople";

import whoWeAreImg from "../../assets/images/we-background.png";

import styles from "./styles";

const WhoWeAre = () => {
  const { goBack } = useNavigation();

  const handleNavigateBack = () => {
    goBack();
  };

  const we = People().creators;

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
