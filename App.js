import React,{useEffect} from "react";
import {View,Text} from "react-native";
import SplashScreen from 'react-native-splash-screen'


const App=()=>{

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },5000)
    
  },)

  return(
    <View>
      <Text>Text</Text>
    </View>
  )
}
export default App;