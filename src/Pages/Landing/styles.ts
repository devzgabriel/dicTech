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
    marginTop: 40,
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "space-between",
  },

  button: {
    height: 150,
    width: "48%",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },

  buttonPrimary: {
    backgroundColor: "#2f2b5c",
  },

  buttonSecondary: {
    backgroundColor: "#2f2b5c",
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 16,
  },

  totalWords: {
    fontFamily: "Poppins_400Regular",
    color: "#2f2b5c",
    fontSize: 12,
    lineHeight: 20,
    // maxWidth: 190,
    marginTop: 40,
  },
});

export default styles;
