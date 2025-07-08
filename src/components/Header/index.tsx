import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import theme from "@/src/theme";
import { Image } from "expo-image";
import { CaretLeftIcon } from "phosphor-react-native";
import Logo from "../Logo";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
};

const Header = ({ showBackButton = false }: Props) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("groups");
  };

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <CaretLeftIcon color={theme.COLORS.WHITE} size={32} />
        </TouchableOpacity>
      )}

      <Logo />
    </View>
  );
};

export default Header;
