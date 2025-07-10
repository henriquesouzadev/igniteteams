import React from "react";
import { TextInput, TextInputProps } from "react-native";
import styles from "./styles";
import theme from "@/src/theme";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput | null>;
};

const Input = ({ style, inputRef, ...rest }: Props) => {
  return (
    <TextInput
      ref={inputRef}
      style={[styles.container, style]}
      placeholderTextColor={theme.COLORS.GRAY_300}
      {...rest}
    />
  );
};

export default Input;
