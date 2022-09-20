import * as React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { Text, Divider } from "react-native-paper";

export default function About({ navigation }) {
    const shopesCity = ["Москва", "Челябинск", "Новосибирск"];

    return (
        <ScrollView>
            <Text variant="headlineMedium">Наши магазины</Text>

            {shopesCity.map((title, index) => (
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("ShopeInfo", shopesCity[index]);
                        }}
                        style={{ marginTop: 20 }}
                    >
                        <Text variant="headlineSmall">{`г. ${title} ->>`}</Text>
                    </TouchableOpacity>
                    <Divider />
                </View>
            ))}
        </ScrollView>
    );
}
