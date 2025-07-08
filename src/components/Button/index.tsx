import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
};

const Button = ({ title, type = "PRIMARY", ...rest }: Props) => {
  const styleMap = {
    PRIMARY: styles.primary,
    SECONDARY: styles.secondary,
  };

  return (
    <TouchableOpacity style={[styles.container, styleMap[type]]} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
