import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

import landingImg from "../../assets/images/landing.png";
import purpleLandingImg from "../../assets/images/purple-landing.png";
import yellowLandingImg from "../../assets/images/yellow-landing.png";
import WordListIcon from "../../assets/images/icons/study.png";
import WhoWeAreIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
// import ... from "../../services/";

function Landing() {
  const { navigate } = useNavigation();

  const [totalWords, settotalWords] = useState(0);

  useEffect(() => {
    //numero palavras cadastradas
    settotalWords(0);
  }, []);

  function handleNavigateToWordPages() {
    navigate("WordList");
  }

  function handleNavigateToWePages() {
    navigate("WhoWeAre");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>Esse é o Dicionário Técnico</Text>
      </Text>

      <Image source={landingImg} style={styles.banner} />

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToWordPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={WordListIcon} />
          <Text style={styles.buttonText}>Dicionário</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToWePages}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={WhoWeAreIcon} />
          <Text style={styles.buttonText}>Quem Somos?</Text>
        </RectButton>
      </View>

      <Text style={styles.totalWords}>
        Total de {totalWords} palavras já cadastradas!{"  "}{" "}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
