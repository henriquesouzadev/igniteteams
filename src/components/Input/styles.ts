import theme from "@/src/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    minHeight: 56,
    maxHeight: 56,
    backgroundColor: theme.COLORS.GRAY_700,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.WHITE,
    borderRadius: 6,
    padding: 16,
  },
});

export default styles;
