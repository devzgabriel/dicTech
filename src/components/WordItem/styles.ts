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
    padding: 20,
  },

  profileInfo: {
    marginLeft: 16,
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
    marginLeft: 3,
  },

  primarymeaning: {
    fontFamily: "Poppins_400Regular",
    color: "#2f2b5c",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 2,
  },

  example: {
    marginTop: -9,
    marginHorizontal: 24,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#2f2b5c",
    paddingBottom: 20,
  },

  footer: {
    backgroundColor: "#fafafc",
    padding: 14,
    alignItems: "center",
  },

  favoriteButton: {
    backgroundColor: "#ffc547",
    width: 100,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    // marginRight: 8,
  },

  favorited: {
    backgroundColor: "#2f2b5c",
  },
});

export default styles;
