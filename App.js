import React,{useEffect} from "react";
import {View,Text} from "react-native";
import SplashScreen from 'react-native-splash-screen'
import {Authentication} from "./src/Router";
import { HomeStackNavigation } from "./src/Router";
import PlayMusic from "./src/HomeStack/Audio/PlayMusic";

const App=()=>{

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },2000)
    
  },)

  return(
 
      <HomeStackNavigation/>

  )
}
export default App;