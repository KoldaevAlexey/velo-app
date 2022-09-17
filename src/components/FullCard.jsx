import * as React from "react";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FullCard = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <Card>
                <Card.Content>
                    <Title>
                        Велосипед STINGER GRAPHITE EVO 29" (2021), рама 22",
                        черный
                    </Title>
                </Card.Content>
                <Card.Cover
                    source={{
                        uri: "https://www.velograd.ru/upload/resize_cache/iblock/38b/z507l2dz2241r0kx4fhtvegyj9y40kbe/450_450_140cd750bba9870f18aada2478b24840a/0d457379_d6ec_11ea_810c_00155d0ba407_b87d504d_2e57_11eb_85e2_0025902dd88f.jpeg",
                    }}
                />
                <Card.Content>
                    <Paragraph style={{ marginTop: 10 }}>
                        Stinger Graphite Evo – относится к категории горных
                        велосипедов, оснащенных колесами диаметром 29 дюймов.
                        Отлично подойдёт для ценителей быстрой езды по городским
                        асфальтовым дорогам и пересечённой местности.
                        Облегченная рама выполнена из уникального алюминиевого
                        сплава.
                    </Paragraph>

                    <Paragraph style={{ marginTop: 10 }}>
                        Материал рамы - Алюминий{"\n"}Количество скоростей - 24{" "}
                        {"\n"}
                        Наименование заднего переключателя - SHIMANO ACERA M360{" "}
                        {"\n"}
                        Наименование переднего переключателя - SHIMANO TOURNEY
                        TY
                        {"\n"}
                    </Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={() => navigation.navigate("About")}>
                        Добавить в корзину
                    </Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
};
export default FullCard;
