import theme from "@/src/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_600,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingIndicator: {
    color: "#000",
  },
});

export default styles;
