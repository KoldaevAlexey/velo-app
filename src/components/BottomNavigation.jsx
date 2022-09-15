import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Blog from "./Blog";

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BotNavigation = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: "blog",
            title: "Блог",
            focusedIcon: "heart",
        },
        { key: "albums", title: "Albums", focusedIcon: "album" },
        { key: "recents", title: "Recents", focusedIcon: "history" },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        blog: Blog,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default BotNavigation;
