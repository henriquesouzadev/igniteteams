import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "@/src/theme";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: "PRIMARY" | "SECONDARY";
};

const ButtonIcon = ({ icon, type = "PRIMARY" }: Props) => {
  const styleMap = {
    PRIMARY: theme.COLORS.GREEN_700,
    SECONDARY: theme.COLORS.RED,
  };

  return (
    <TouchableOpacity style={[styles.container]}>
      <MaterialIcons name={icon} color={styleMap[type]} size={24} />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
