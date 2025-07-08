import { StatusBar } from "expo-status-bar";
import { Groups } from "./src/screens/Groups";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { View } from "react-native";
import Loading from "./src/components/Loading";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
      }}
    >
      <StatusBar style="inverted" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </View>
  );
}
