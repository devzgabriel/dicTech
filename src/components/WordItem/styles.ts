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
    padding: 24,
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: "Archivo_700Bold",
    color: "#2f2b5c",
    fontSize: 20,
  },

  primarymeaning: {
    fontFamily: "Poppins_400Regular",
    color: "#2f2b5c",
    fontSize: 12,
    marginTop: 4,
  },

  example: {
    marginHorizontal: 24,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#2f2b5c",
  },

  footer: {
    backgroundColor: "#fafafc",
    padding: 18,
    alignItems: "flex-end",
  },

  favoriteButton: {
    backgroundColor: "#ffc547",
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  favorited: {
    backgroundColor: "#2f2b5c",
  },
});

export default styles;
