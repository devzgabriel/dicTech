import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../Pages/Landing";
import WhoWeAre from "../Pages/WhoWeAre";
import WordList from "./AppTabs";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="WhoWeAre" component={WhoWeAre} />
        <Screen name="WordList" component={WordList} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
