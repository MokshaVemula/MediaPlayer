import React,{useEffect} from "react";
import {View,Text} from "react-native";
import SplashScreen from 'react-native-splash-screen'
import {Authentication} from "./src/Router";
import { HomeStackNavigation } from "./src/Router";
import PlayMusic from "./src/HomeStack/Audio/PlayMusic";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

const App=()=>{

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },2000)
    
  },)

  return(
      <Provider store={Store}>
          <HomeStackNavigation/>
      </Provider>
      //<HomeStackNavigation/>

  )
}
export default App;