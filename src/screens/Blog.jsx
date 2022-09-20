import * as React from "react";
import { View, ScrollView, Button } from "react-native";
import Post from "../components/Post";

export default function Blog({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Post
                    img={
                        "https://www.velograd.ru/upload/medialibrary/39e/oipyfa8z17ltbslppt2tjtbvqgytnqkj/s1200_59.jpg"
                    }
                    text={`ТОП-5 трюков на самокате ${"\n"}для профи`}
                    date={"5 августа 2022"}
                />
                <Post
                    img={
                        "https://www.velograd.ru/upload/medialibrary/b74/9jib3fyeixvcqibcif6c5qe6i1uowno2/f6ba428434f353a1d9ea749cfd6542a6.jpeg"
                    }
                    text={`ТОП-5 фильмов об увлечении ${"\n"}велосипедами`}
                    date={"3 августа 2022"}
                />
                <Post
                    img={
                        "https://www.velograd.ru/upload/medialibrary/f37/adruawg0iqmffmfixgf83m7zwm2ngrc7/ffca3a55b9fbe54848794a71e3834e20.jpg"
                    }
                    text={"Ремонт и обслуживание велосипедов"}
                    date={"29 июля 2022"}
                />
                <Post
                    img={
                        "https://www.velograd.ru/upload/medialibrary/276/350mnkjsadzdp3nrkhy2ez0rfb7dgwox/1599682556_pic16.jpeg"
                    }
                    text={`ТОП-5 трюков на самокатах для ${"\n"}уверенных райдеров`}
                    date={"22 июля 2022"}
                />
                <Post
                    img={
                        "https://www.velograd.ru/upload/medialibrary/8b2/zck821otbmtlpwljk7wpw7r3wspg7o40/IMG_0954_5b7627ad32dc.jpg"
                    }
                    text={"Ребенок просит трюковой самокат?"}
                    date={"8 июля 2022"}
                />
            </View>
            <Button
                onPress={() => navigation.navigate("Catalog")}
                title={`перейти в каталог`}
            />
        </ScrollView>
    );
}
