import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import About from "./src/screens/About";
import Blog from "./src/screens/Blog";
import Catalog from "./src/screens/Catalog";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Blog" component={Blog} />
                <Stack.Screen name="Catalog" component={Catalog} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
