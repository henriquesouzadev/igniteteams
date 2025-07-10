import React, { useState } from "react";
import { Alert, View } from "react-native";
import theme from "@/src/theme";
import Header from "@/src/components/Header";
import Highlight from "@/src/components/Highlight";
import styles from "./styles";
import Button from "@/src/components/Button";
import { UsersThreeIcon } from "phosphor-react-native";
import Input from "@/src/components/Input";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { groupCreate } from "@/src/storage/group/groupCreate";
import { AppError } from "@/src/utils/AppError";

export function NewGroup() {
  const navigation = useNavigation();

  const [group, setGroup] = useState("");

  const handleNewGroup = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo grupo", "Informe o nome da turma");
      }
      navigation.navigate("players", { group: group });
      await groupCreate(group);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possível criar um novo grupo");
        console.log(error);
      }
    }
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

        <Input
          style={{ marginBottom: 20 }}
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button title="Criar" onPress={handleNewGroup} />
      </View>
    </SafeAreaView>
  );
}
