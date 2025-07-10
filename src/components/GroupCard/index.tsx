import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import styles from "./styles";
import { UsersThreeIcon } from "phosphor-react-native";
import theme from "@/src/theme";

type Props = TouchableOpacityProps & {
  title: string;
};

const GroupCard = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
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
