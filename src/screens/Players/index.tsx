import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
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
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@/src/utils/AppError";
import { playerAddByGroup } from "@/src/storage/player/playerAddByGroup";
import { playersGetByGroup } from "@/src/storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "@/src/storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@/src/storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@/src/storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@/src/storage/group/groupRemoveByName";
import Loading from "@/src/components/Loading";

type RouteParams = {
  group: string;
};

const Players = () => {
  const route = useRoute();
  const { group } = route.params as RouteParams;
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("time a");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova pessoa",
        "Informe o nome da pessoa para adicionar"
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team: team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      newPlayerNameInputRef.current?.blur();
      Keyboard.dismiss();
      setNewPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "Não foi possível adicionar");
      }
    }
  };

  const fetchPlayersByTeam = async () => {
    try {
      setIsLoading(true);
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Pessoas", "Não foi possível carregar as pessoas deste time");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemovePlayer = async (playerName: string) => {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      Alert.alert("Remover pessoa", "Não foi possível remover essa pessoa");
    }
  };

  const groupRemove = async () => {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover grupo", "Não foi possível remover o grupo");
    }
  };

  const handleGroupRemove = async () => {
    Alert.alert("Remover", "Deseja remover o grupo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => groupRemove() },
    ]);
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <View style={styles.form}>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
          value={newPlayerName}
        />

        <ButtonIcon type="PRIMARY" icon="add" onPress={handleAddPlayer} />
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(player) => player.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handleRemovePlayer(item.name)}
            />
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
      )}

      <Button
        title="Remover turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />
    </SafeAreaView>
  );
};

export default Players;
