import React,{useEffect} from "react";
import {View,Text} from "react-native";
import SplashScreen from 'react-native-splash-screen'
import {Authentication} from "./src/Router";
import { HomeStackNavigation } from "./src/Router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import {useSelector,useDispatch} from "react-redux";
import { store } from "./src/redux/store";
import { getToken } from "./src/redux/actions";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./src/redux/store";

const AppWrapper=()=>{
  const storeData = useSelector((state)=>state)
  
  const uid = storeData.userReducer.uid
  const dispatch = useDispatch();

  

  
  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },6000)

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
    <Provider store={store}>
      <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
        <AppWrapper />
      </PersistGate>
      
    </Provider>
  )
}

export default App;

