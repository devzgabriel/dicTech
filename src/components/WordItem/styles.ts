import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2f2b5c",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },

  profileInfo: {
    marginLeft: 10,
  },

  primaryVision: {
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },

  name: {
    fontFamily: "Archivo_700Bold",
    color: "#2f2b5c",
    fontSize: 20,
  },

  division: {
    fontFamily: "Archivo_700Bold",
    color: "#2f2b5c",
    fontSize: 15,
    marginTop: 3,
    marginLeft: 2,
  },

  primarymeaning: {
    fontFamily: "Poppins_400Regular",
    color: "#2f2b5c",
    fontSize: 12,
    marginTop: 4,
  },

  example: {
    marginTop: 0,
    marginHorizontal: 26,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 18,
    color: "#2f2b5c",
    paddingBottom: 12,
  },

  footer: {
    alignItems: "center",
  },
  buttonContainer: {
    padding: 8,
    backgroundColor: "#fafafc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  favoriteButton: {
    backgroundColor: "#ffc547",
    width: 100,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    // marginRight: 8,
  },

  favorited: {
    backgroundColor: "#2f2b5c",
  },
  linkReference: {
    backgroundColor: "#2f2b5c",
    width: 130,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    color: "#FFF",
    fontFamily: "Archivo_700Bold",
    fontSize: 13,
  },
});

export default styles;
