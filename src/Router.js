import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import SelectAudioOrVideo from "./HomeStack/Home";
import {AudioList} from "./HomeStack/Audio/AudioList"
import PlayMusic from "./HomeStack/Audio/PlayMusic";
import VideoHome from "./HomeStack/Video/VideoHome";
import {VideoList} from "./HomeStack/Video/VideoList";
import PlayVideo from "./HomeStack/Video/PlayVideo";
import EmbedVideoCode from "./HomeStack/Video/EmbedVideoCode/EmbedVideoCode";
import Player from "./HomeStack/Video/EmbedVideoCode/VideoPlayer";

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
                <Stack.Screen name='SelectAudioOrVideo' component={SelectAudioOrVideo} options={{headerShown:false}}/>
                <Stack.Screen name='AudioList' component={AudioList} options={{headerStyle:{backgroundColor:'grey',},headerTintColor:'white', headerTitleStyle:{fontWeight:'bold'}}}/>
                <Stack.Screen name='PlayMusic' component={PlayMusic}/>
                <Stack.Screen name='VideoHome' component={VideoHome}/>
                <Stack.Screen name='VideoList' component={VideoList}/>
                <Stack.Screen name='PlayVideo' component={PlayVideo} />
                <Stack.Screen name='EmbedVideoCode' component={EmbedVideoCode} options={{headerStyle:{backgroundColor:'grey',},headerTintColor:'white', headerTitleStyle:{fontWeight:'bold'}}}/>
                <Stack.Screen name='Player' component={Player} options={{headerStyle:{backgroundColor:'grey',},headerTintColor:'white', headerTitleStyle:{fontWeight:'bold'}}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export  {Authentication , HomeStackNavigation}