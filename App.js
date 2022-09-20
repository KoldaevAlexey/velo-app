import * as React from "react";
import { Button, View, BlurView, Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Head from "./src/components/Header";
import About from "./src/screens/About";
import Blog from "./src/screens/Blog";
import Catalog from "./src/screens/Catalog";
import Footer from "./src/components/Footer";
import Home from "./src/screens/Home";

import { shopesData } from "./shopesData";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ShopeInfo from "./src/components/ShopeInfo";

const Tab = createBottomTabNavigator();

const info = shopesData;

export const infoContext = React.createContext(info);

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: "red",
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Главная",
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/92/92602.png",
                            }}
                            style={{ width: size, height: size }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Catalog"
                component={Catalog}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="About"
                component={About}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <infoContext.Provider value={info}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        header: Head,
                    }}
                >
                    <Stack.Screen name="MyTabs" component={MyTabs} />

                    <Stack.Screen name="Blog" component={Blog} />
                    <Stack.Screen name="ShopeInfo" component={ShopeInfo} />
                </Stack.Navigator>
            </NavigationContainer>
        </infoContext.Provider>
    );
}
