import * as React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import FullCard from "../components/FullCard";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { bikesData } from "../../bikesData";

export default function Catalog() {
    console.log(bikesData);
    return (
        <ScrollView>
            {bikesData.map((item) => (
                <Card
                    style={{
                        marginTop: 5,
                        border: "1px solid",
                        borderColor: "red",
                    }}
                >
                    <Text>{item.title}</Text>
                    <Card.Cover
                        style={{ width: 250, height: 150 }}
                        source={{
                            uri: item.img,
                        }}
                    />
                    <Text>{`от ${item.price} руб. `}</Text>
                    <Card.Actions>
                        <Button>В корзину</Button>
                    </Card.Actions>
                </Card>
            ))}
        </ScrollView>
    );
}
