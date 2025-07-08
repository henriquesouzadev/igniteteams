import React, { useState } from "react";
import { FlatList, Text, TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";
import theme from "@/src/theme";
import Header from "../../components/Header";
import Highlight from "../../components/Highlight";
import ButtonIcon from "../../components/ButtonIcon";
import Input from "../../components/Input";
import Filter from "../../components/Filter";
import PlayerCard from "../../components/PlayerCard";
import ListEmpty from "../../components/ListEmpty";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const Players = () => {
  const [team, setTeam] = useState("time a");
  const [players, setPlayers] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <View style={styles.form}>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon type="PRIMARY" icon="add" />
      </View>

      <View style={styles.headerList}>
        <FlatList
          data={["time a", "time b"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <Text style={styles.numberOfPlayers}>{players.length}</Text>
      </View>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </SafeAreaView>
  );
};

export default Players;
