import React,{useEffect} from "react";
import {View,Text} from "react-native";
import SplashScreen from 'react-native-splash-screen'
import Login from "./src/Authentication.js/Login";
import Register from "./src/Authentication.js/Register";

const App=()=>{

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },2000)
    
  },)

  return(
 
      <Register />

  )
}
export default App;