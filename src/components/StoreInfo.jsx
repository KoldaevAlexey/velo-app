import * as React from "react";
import { View, Text, Image } from "react-native";
import { Divider } from "react-native-paper";

export default function StoreInfo({ img, adress, phoneNumber, workTime }) {
    return (
        <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text>Москва</Text>
            <View>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={{
                        uri: img,
                    }}
                />
                <Text style={{ marginTop: 5 }}>{adress}</Text>
                <Text style={{ marginTop: 5 }}>{phoneNumber}</Text>
                <Text style={{ marginTop: 5 }}>{workTime}</Text>
            </View>
            <Divider style={{ marginTop: 5 }} />
        </View>
    );
}
