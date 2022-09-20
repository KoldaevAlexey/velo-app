import * as React from "react";
import { View, Text, Image } from "react-native";
import { Divider } from "react-native-paper";
import { infoContext } from "../../App";

export default function ShopeInfo({ route, navigation }) {
    const shopes = React.useContext(infoContext);

    const onclickCityTitle = route.params;

    const renderShops = shopes.filter(
        (shop) => shop.title === onclickCityTitle
    );
    return (
        <View>
            {renderShops.map((item) => (
                <View style={{ marginLeft: 10, marginTop: 10 }}>
                    <View>
                        <Image
                            style={{ width: 200, height: 200 }}
                            source={{
                                uri: item.img,
                            }}
                        />
                        <Text style={{ marginTop: 5 }}>{item.adress}</Text>
                        <Text style={{ marginTop: 5 }}>{item.phoneNumber}</Text>
                        <Text style={{ marginTop: 5 }}>{item.workTime}</Text>
                    </View>
                    <Divider style={{ marginTop: 5 }} />
                </View>
            ))}
        </View>
    );
}
