import { StyleSheet } from "react-native";

const sytles = StyleSheet.create({
  container: {
    // paddingHorizontal: 40,
    // paddingVertical: 20,
    zIndex: 1,
    padding: 25,
    paddingTop: 35,
    paddingBottom: 10,
    backgroundColor: "#ffc547",
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#2f2b5c",
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 10,
  },
});

export default sytles;
