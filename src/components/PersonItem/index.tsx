import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

export interface Person {
  avatar?: any;
  bio?: string;
  name?: string;
  occupation?: string;
}

const PersonItem: React.FC<Person> = ({ avatar, bio, name, occupation }) => {
  function handleLinkToLinkedIn() {}

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={avatar} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.occupation}> {occupation} </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.bio}>{bio}</Text>
        {/* <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleLinkToLinkedIn}
            style={styles.contactButton}
          >
            <Text style={styles.contactButtonText}>WhatsApp</Text>
          </RectButton>
        </View> */}
      </View>
    </View>
  );
};

export default PersonItem;
