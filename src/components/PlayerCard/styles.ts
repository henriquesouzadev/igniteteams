import theme from "@/src/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 56,
    backgroundColor: theme.COLORS.GRAY_500,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 6,
  },
  name: {
    flex: 1,
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_200,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  icon: {
    marginLeft: 16,
    marginRight: 4,
  },
});

export default styles;
