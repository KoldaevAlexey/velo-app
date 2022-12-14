import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";

const MyComponent = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <Provider>
            <View
                style={{
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>13245678</Button>}
                >
                    <Menu.Item onPress={() => {}} title="Item 1" />
                    <Menu.Item onPress={() => {}} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
            </View>
        </Provider>
    );
};

export default MyComponent;
