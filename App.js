import React,{useEffect} from "react";
import {View,Text} from "react-native";
import SplashScreen from 'react-native-splash-screen'
import Authentication from "./src/Router";
import SelectAudioOrVideo from "./src/HomeStack/Home";

const App=()=>{

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },2000)
    
  },)

  return(
 
      <Authentication/>

  )
}
export default App;