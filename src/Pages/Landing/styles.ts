import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc547",
    justifyContent: "space-around",
    padding: 40,
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    fontFamily: "Poppins_400Regular",
    color: "#2f2b5c",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 16,
    marginBottom: 40,
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonsContainer: {
    flexDirection: "column",
    // marginTop: 80,
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#2f2b5c",
    borderRadius: 8,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  buttonPrimary: {
    height: 60,
    width: "100%",

    marginTop: 40,
  },

  buttonSecondary: {
    width: "90%",
    height: 52,
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 16,
    marginLeft: 26,
  },

  totalWords: {
    fontFamily: "Poppins_400Regular",
    color: "#2f2b5c",
    fontSize: 12,
    lineHeight: 20,
    // maxWidth: 190,
    marginTop: 20,
  },
});

export default styles;
