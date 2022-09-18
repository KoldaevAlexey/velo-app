import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: "row", height: 100 }}>
            <Text>Footer</Text>
            <Button
                title="в каталог"
                onPress={() => navigation.navigate("Catalog")}
            />
            <Button
                title="в блог"
                onPress={() => navigation.navigate("Blog")}
            />
            <Button
                title="в эбаут"
                onPress={() => navigation.navigate("About")}
            />
        </View>
    );
}
