import * as React from "react";
import { Appbar } from "react-native-paper";
import { Text } from "react-native";

const Head = () => {
    return (
        <Appbar.Header>
            <Text>Картинка велограда</Text>
            <Appbar.Content title="Велоград" />
        </Appbar.Header>
    );
};

export default Head;
