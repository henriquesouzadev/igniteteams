import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "@/src/theme";
import ButtonIcon from "../ButtonIcon";

type Props = {
  name: string;
  onRemove: () => void;
};

const PlayerCard = ({ name, onRemove }: Props) => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        style={styles.icon}
        name="person"
        size={24}
        color={theme.COLORS.GRAY_200}
      />

      <Text style={styles.name}>{name}</Text>

      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </View>
  );
};

export default PlayerCard;
