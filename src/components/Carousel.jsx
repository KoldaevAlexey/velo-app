import * as React from "react";
import { Dimensions, Text, View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const imgData = [
    "https://www.velograd.ru/upload/iblock/f31/05ws276jnku5708ydihwig0atd45zkg0/Banner-Desktop-Vygodnaya-Osen.jpg",
    "https://thumb.tildacdn.com/tild3730-3066-4732-a163-313261616434/-/format/webp/simon-connellan-lFva.jpg",
    "https://www.velograd.ru/upload/iblock/cfc/ydspy1kl3sdbtvkutagednb1d52rxvec/Banner-Desktop-Privezem-na-vybor_1.jpg",
];

function Index() {
    const width = Dimensions.get("window").width;
    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(3).keys()]}
                scrollAnimationDuration={2500}
                onSnapToItem={(index) => console.log("current index:", index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            style={{ width: width, height: width / 2 }}
                            source={{ uri: imgData[index] }}
                        />
                    </View>
                )}
            />
        </View>
    );
}

export default Index;
