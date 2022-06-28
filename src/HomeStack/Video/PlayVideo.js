import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native'
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/Feather'
import Video from 'react-native-video';
//import { Dimensions } from 'react-native';
// import { DATA } from './AudioList';


const PlayVideo = ({navigation,route}) => {

  const [dimentions, setDimentions] = useState(true)

  const data=route.params.data
    console.log('....',data);
  console.log('playVideo',data.video);

  //require('../../asserts/video.mp4')  ${data.song} ${data.song}`

  // const isPortrait = () => {
  //   const dim = Dimensions.get('screen');
  //   return dim.height >= dim.width;
  // };

  // const isLandscape = () => {
  //   const dim = Dimensions.get('screen');
  //   return dim.width >= dim.height;
  // };

  // dimentions=() => {
  //   setDimentions({
  //       orientation: Platform.isPortrait() ? 'portrait' : 'landscape'
  //   });
  // }
  
  return (
    <View style={styles.container}>
        <Video source={data.video} style={{height:'100%',width:'100%'}}
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






