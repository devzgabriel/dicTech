import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },

  wait: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  waitText: {
    maxWidth: 200,
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: "#2f2b5c",
    textAlign: "center",
  },

  wordList: {
    paddingTop: 16,
  },

  searchForm: {
    marginBottom: 16,
  },

  label: {
    color: "#2f2b5c",
    fontFamily: "Poppins_400Regular",
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputBlock: {
    width: "48%",
  },

  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  submitButton: {
    backgroundColor: "#2f2b5c",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  resetSearch: {
    margin: 10,
    marginTop: -4,
    backgroundColor: "#2f2b5c",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  submitButtonText: {
    zIndex: -10,
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
  },
});

export default styles;
