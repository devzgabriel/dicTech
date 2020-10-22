import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#6a6180",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#eee",
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: "Archivo_700Bold",
    color: "#32264d",
    fontSize: 20,
    maxWidth: 150,
  },

  occupation: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 20,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#32464d",
  },

  footer: {
    backgroundColor: "#eaeaec",
    padding: 24,
    alignItems: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  contactButton: {
    backgroundColor: "#04d361",
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  contactButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;
