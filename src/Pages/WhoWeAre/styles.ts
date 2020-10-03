import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc547",
    justifyContent: "center",
    padding: 40,
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
    marginVertical: 40,
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
