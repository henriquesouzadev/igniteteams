import React from "react";
import { TextInput, TextInputProps } from "react-native";
import styles from "./styles";
import theme from "@/src/theme";

const Input = ({ style, ...rest }: TextInputProps) => {
  return (
    <TextInput
      style={[styles.container, style]}
      {...rest}
      placeholderTextColor={theme.COLORS.GRAY_300}
    />
  );
};

export default Input;
