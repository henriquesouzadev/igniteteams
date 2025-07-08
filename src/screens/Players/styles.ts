import theme from "@/src/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_600,
    padding: 24,
  },
  form: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    backgroundColor: theme.COLORS.GRAY_700,
    borderRadius: 6,
  },
  headerList: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 12,
    marginHorizontal: 0,
  },
  numberOfPlayers: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.GRAY_200,
    fontSize: theme.FONT_SIZE.SM,
  },
});

export default styles;
