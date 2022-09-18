import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Index from "../components/Carousel";

export default function Home() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Домашняя страница</Text>
            <Button title="123" onPress={() => navigation.navigate("Blog")} />
            <Index />
        </View>
    );
}
