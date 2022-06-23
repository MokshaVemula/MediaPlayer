import React,{useEffect} from "react";
import {View,Text} from "react-native";
import SplashScreen from 'react-native-splash-screen'
import {Authentication} from "./src/Router";
import { HomeStackNavigation } from "./src/Router";

import { Provider } from "react-redux";
import {useSelector,useDispatch} from "react-redux";
import { Store } from "./src/redux/store";

const AppWrapper=()=>{
  const storeData = useSelector((state)=>state)
  const uid = storeData.userReducer.uid

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },2000)

  },)

  if (uid){
    return(
      <HomeStackNavigation/>
    )  
  }
  return(
    <Authentication/>
  )
  
  
}

const App = () => {

  return (
    <Provider store={Store}>
      <AppWrapper />
    </Provider>
  )
}

export default App;

