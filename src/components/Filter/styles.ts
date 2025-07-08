import theme from "@/src/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    marginRight: 12,
    height: 38,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    borderWidth: 1,
    borderColor: theme.COLORS.GREEN_700,
    borderStyle: "solid",
  },
  secondary: {
    backgroundColor: theme.COLORS.RED_DARK,
  },
  title: {
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.WHITE,
    fontFamily: theme.FONT_FAMILY.BOLD,
    textTransform: "uppercase",
  },
});

export default styles;
