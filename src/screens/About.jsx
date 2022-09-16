import { ScrollView } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import StoreInfo from "../components/StoreInfo";

export default function About() {
    return (
        <ScrollView>
            <Text variant="headlineMedium">Наши магазины</Text>
            <StoreInfo
                img={
                    "https://www.velograd.ru/upload/iblock/69c/q2ys9elnzf2i9ioc0kpiphuuzcdrs20o/30258560053436464_c4de.jpg"
                }
                adress={"г. Москва Очаково, ул. Большая Очаковская дом 22"}
                phoneNumber={"+7(495) 021-67-94"}
                workTime={"ПН-ВС с 10:00 до 22:00"}
            />
            <StoreInfo
                img={
                    "https://www.velograd.ru/upload/iblock/e95/e95f8ecf31d83d6a5ebb7f36fe4dcf5f.jpg"
                }
                adress={"г. Москва Янгеля, ул.Кировоградская, д.23а"}
                phoneNumber={"+7(495) 021-67-94"}
                workTime={"ПН-ВС с 10:00 до 22:00"}
            />
        </ScrollView>
    );
}
