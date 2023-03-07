import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View} from "react-native";
import {Home} from "./Home";


const Stack = createNativeStackNavigator()
export const Main = () => {
    return (
        <View style={{flex: 1}}>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={Home} />
            </Stack.Navigator>
        </View>
    );
};
