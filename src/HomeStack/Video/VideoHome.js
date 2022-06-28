import React from "react";
import {Text, View, Pressable, StyleSheet} from 'react-native'
import LinearGradient from "react-native-linear-gradient";



const VideoHome = ({navigation}) =>{
    

    return(
        <View style={{flex:1}}>
            <LinearGradient colors={['#753a88', '#734b6d', '#48b1bf']} start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{flex:1, }}>
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <LinearGradient colors={['purple', 'pink', 'purple', ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'80%', borderRadius:30, marginBottom:20,height:50, paddingTop:8 }}>
                        <Pressable style={styles.textContainer} onPress={()=>navigation.navigate('EmbedVideoCode')}>
                            <Text style={styles.text}>Youtube</Text>
                        </Pressable>
                    </LinearGradient>
                    <LinearGradient colors={['purple', 'pink', 'purple', ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'80%', borderRadius:30, marginBottom:20,height:50, paddingTop:8 }}>
                        <Pressable style={styles.textContainer} onPress={()=>navigation.navigate('VideoList')}>
                            <Text style={styles.text}>Video</Text>
                        </Pressable>
                    </LinearGradient>
                </View>
            </LinearGradient>
        </View>
    )
}

export default VideoHome

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