import React from "react";
import { View } from "react-native";
import theme from "@/src/theme";
import Header from "@/src/components/Header";
import Highlight from "@/src/components/Highlight";
import styles from "./styles";
import Button from "@/src/components/Button";
import { UsersThreeIcon } from "phosphor-react-native";
import Input from "@/src/components/Input";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export function NewGroup() {
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("players", { group: "Rocket" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton />

      <View style={styles.content}>
        <UsersThreeIcon size={56} color={theme.COLORS.GREEN_700} />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input style={{ marginBottom: 20 }} placeholder="Nome da turma" />

        <Button title="Criar" onPress={handleNewGroup} />
      </View>
    </SafeAreaView>
  );
}
