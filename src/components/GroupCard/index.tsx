import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { UsersThreeIcon } from "phosphor-react-native";
import theme from "@/src/theme";

type Props = {
  title: string;
};

const GroupCard = ({ title }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <UsersThreeIcon
        style={styles.icon}
        weight="fill"
        color={theme.COLORS.GREEN_700}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GroupCard;
