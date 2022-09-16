import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import BotNavigation from "./src/components/BottomNavigation";
import Head from "./src/components/Header";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Blog from "./src/screens/Blog";
import About from "./src/screens/About";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider>
                <Head />

                <BotNavigation styles={{ height: 400 }}></BotNavigation>

                <StatusBar style="auto" />
            </PaperProvider>
        </NavigationContainer>
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
