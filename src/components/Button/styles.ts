import theme from "@/src/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    minHeight: 56,
    maxHeight: 56,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: theme.COLORS.GREEN_700,
  },
  secondary: {
    backgroundColor: theme.COLORS.RED_DARK,
  },
  title: {
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.WHITE,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
});

export default styles;
