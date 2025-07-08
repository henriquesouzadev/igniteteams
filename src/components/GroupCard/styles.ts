import theme from "@/src/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    backgroundColor: theme.COLORS.GRAY_500,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_200,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  icon: {
    marginRight: 20,
  },
});

export default styles;
