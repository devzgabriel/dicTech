import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import whoWeAreImg from "../../assets/images/give-classes-background.png";

import styles from "./styles";

const WhoWeAre = () => {
  const { goBack } = useNavigation();

  const handleNavigateBack = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={whoWeAreImg}
        resizeMode="contain"
        style={styles.content}
      >
        <Text style={styles.title}>Quem são os criadores?</Text>
        <Text style={styles.description}>Programação</Text>
        <Text style={styles.description}>Pesquisa</Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Voltar</Text>
      </RectButton>
    </View>
  );
};

export default WhoWeAre;
