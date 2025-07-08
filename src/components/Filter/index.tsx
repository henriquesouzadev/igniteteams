import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
};

const Filter = ({ title, isActive = true, ...rest }: Props) => {
  const isActiveStyle = () => (isActive ? styles.active : {});
  return (
    <TouchableOpacity style={[styles.container, isActiveStyle()]} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Filter;
