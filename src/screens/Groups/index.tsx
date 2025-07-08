import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import theme from "@/src/theme";
import Header from "@/src/components/Header";
import Highlight from "@/src/components/Highlight";
import GroupCard from "@/src/components/GroupCard";
import styles from "./styles";
import ListEmpty from "@/src/components/ListEmpty";
import Button from "@/src/components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        style={{ width: "100%" }}
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Cadastre a primeira turma" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </SafeAreaView>
  );
}
