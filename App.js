import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import Buton from "./src/components/Button";
import BotNavigation from "./src/components/BottomNavigation";

export default function App() {
    return (
        <PaperProvider>
            <BotNavigation styles={{ height: 400 }}></BotNavigation>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
