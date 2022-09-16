import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Blog from "../screens/Blog";
import About from "../screens/About";
import Catalog from "../screens/Catalog";

const BotNavigation = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: "blog",
            title: "Блог",
            focusedIcon: "note-text-outline",
        },
        { key: "about", title: "О компании", focusedIcon: "emoticon-devil" },
        { key: "catalog", title: "Каталог", focusedIcon: "bike-fast" },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        blog: Blog,
        about: About,
        catalog: Catalog,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            inactiveColor={"grey"}
            sceneAnimationEnabled={true}
            sceneAnimationType={"shifting"}
            style={{ marginTop: 50 }}
        />
    );
};

export default BotNavigation;
