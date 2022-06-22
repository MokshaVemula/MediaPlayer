import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import SelectAudioOrVideo from "./HomeStack/Home";
import {AudioList} from "./HomeStack/Audio/AudioList"
import PlayMusic from "./HomeStack/Audio/PlayMusic";


const Authentication = () =>{
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Register' component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const HomeStackNavigation = () =>{
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name = 'SelectAudioOrVideo' component={SelectAudioOrVideo} options={{headerShown:false}}/>
                <Stack.Screen name = 'AudioList' component={AudioList} />
                <Stack.Screen name='PlayMusic' component={PlayMusic}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export  {Authentication , HomeStackNavigation}