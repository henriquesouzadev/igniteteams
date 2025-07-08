import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {
  message: string;
};

const ListEmpty = ({ message }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default ListEmpty;
