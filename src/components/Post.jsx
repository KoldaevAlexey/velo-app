import * as React from "react";
import { View, Text, Image } from "react-native";
import { Divider } from "react-native-paper";

export default function Post({ img, text, date }) {
    return (
        <View style={{ marginTop: 10 }}>
            <View
                style={{
                    marginLeft: 10,
                    flexDirection: "row",
                }}
            >
                <Image
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={{
                        uri: img,
                    }}
                />
                <View>
                    <Text style={{ marginLeft: 10 }}>{text}</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10 }}>
                        {date}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Divider />
            </View>
        </View>
    );
}
