import React, { useEffect } from 'react'
import { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native'
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/Feather'
import Video from 'react-native-video';
// import { DATA } from './AudioList';


const PlayVideo = ({navigation,route}) => {
  const data=route.params.data
    console.log('....',data);
  console.log('playVideo',data.song);

  //require('../../asserts/video.mp4')  ${data.song} ${data.song}`
  
  return (
    <View style={styles.container}>
        <Text>Video Playing</Text>
        <Video source={require('../../asserts/video.mp4')} style={{height:'100%',width:'100%'}}
            controls={true}
            audioOnly={true}
            resizeMode="contain"
            
        />
    </View>
    
  )
}
export default PlayVideo

styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoIcon:{
        width:300,
        height:300
    }
})






