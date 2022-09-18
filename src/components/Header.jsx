import * as React from "react";
import { Appbar } from "react-native-paper";
import { Button } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import About from "../screens/About";

import MyComponent from "./MMenu";

const Head = ({ navigation, back }) => {
    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title="ИМ Вело" />
            <MyComponent />
        </Appbar.Header>
    );
};

export default Head;
