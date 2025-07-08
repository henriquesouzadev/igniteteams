import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";
import theme from "@/src/theme";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.COLORS.GREEN_500} />
    </View>
  );
};

export default Loading;
