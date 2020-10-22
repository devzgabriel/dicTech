import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc547",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 20,
  },
  personList: {
    marginTop: 10,
    height: 200,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#2f2b5c",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 250,
  },

  description: {
    marginTop: 24,
    color: "#2f2b5c",
    fontSize: 20,
    lineHeight: 26,
    fontFamily: "Poppins_400Regular",
    maxWidth: 240,
  },

  okButton: {
    marginVertical: 10,
    backgroundColor: "#2f2b5c",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  okButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
  },
});

export default styles;
