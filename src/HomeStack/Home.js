import React from "react";
import {Text, View, Pressable, StyleSheet} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import { color } from "react-native-reanimated";
import { useDispatch} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { removeToken } from "../redux/actions";

const SelectAudioOrVideo = ({navigation}) =>{
    const dispatch = useDispatch();

    function signOut(){
        const val = AsyncStorage.removeItem('token');
        dispatch(removeToken(val));
    }

    return(
        <View style={{flex:1}}>
            <LinearGradient colors={['#753a88', '#734b6d', '#48b1bf']} start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{flex:1, }}>
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <LinearGradient colors={['purple', 'pink', 'purple', ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'80%', borderRadius:30, marginBottom:20,height:50, paddingTop:8 }}>
                        <Pressable style={styles.textContainer} onPress={()=>navigation.navigate('AudioList')}>
                            <Text style={styles.text}>Audio</Text>
                        </Pressable>
                    </LinearGradient>
                    <LinearGradient colors={['purple', 'pink', 'purple', ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'80%', borderRadius:30, marginBottom:20,height:50, paddingTop:8 }}>
                        <Pressable style={styles.textContainer} onPress={()=>navigation.navigate('VideoList')}>
                            <Text style={styles.text}>Video</Text>
                        </Pressable>
                    </LinearGradient>
                </View>
                <LinearGradient colors={['blue', 'skyblue', 'blue', ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'80%', borderRadius:30, marginBottom:20,height:50, paddingTop:8, marginLeft:40, marginBottom:20}}>
                        <Pressable style={styles.textContainer} onPress={signOut}>
                            <Text style={styles.text}>SignOut</Text>
                        </Pressable>
                    </LinearGradient>
            </LinearGradient>
        </View>
    )
}

export default SelectAudioOrVideo

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        fontFamily:'Roboto',
        color:'black',
    },
    textContainer:{
        alignItems:"center",
        justifyContent:'center'
        
    }
})


