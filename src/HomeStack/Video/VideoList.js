import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const DATA = [
  {
    id: "1",
    title: "First Video",
    video:require('../../asserts/video.mp4')
    //'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  },
  {
    id: "2",
    title: "Second Video",
    video:require('../../asserts/video_2.mp4')
    //'https://static.videezy.com/system/resources/previews/000/008/139/original/Flat_Walking_Background.mp4'
  },
  {
    id: "3",
    title: "Third Video",
    video:require('../../asserts/video3.mp4')
    //'https://static.videezy.com/system/resources/previews/000/022/005/original/cartoon-seamless-rural-landscape-footage.mp4'
   
  },
  {
    id: "4",
    title: "Forth Video",
    video:require('../../asserts/video_2.mp4')
    //'https://static.videezy.com/system/resources/previews/000/008/139/original/Flat_Walking_Background.mp4'
  },
  {
    id: "5",
    title: "Fifth Video",
    video:require('../../asserts/video3.mp4')
    //'https://static.videezy.com/system/resources/previews/000/022/005/original/cartoon-seamless-rural-landscape-footage.mp4'
   
  },
];

const Item = ({ item, onPress, backgroundColor, textColor, }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor,{alignItems:'center'}]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    
  </TouchableOpacity>
);

const VideoList = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'darkblue' : "purple";
    const color = item.id === selectedId ? 'black' : 'white';
    // console.log('..........',item);
    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id), navigation.navigate('PlayVideo',{data:item})}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
    
      />

    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['skyblue', 'purple', ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{flex:1, }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />    
      </LinearGradient>
    </SafeAreaView>


  );
};

export {DATA, VideoList }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
    justifyContent:"center",
    //backgroundColor:'blue'
    
  },
  item: {
    padding: 8,
    marginVertical: 15,
    marginHorizontal: 16,
    borderRadius:50,
    
  },
  title: {
    fontSize: 32,
  },
});






























// import React from "react";
// import {Text, View, SafeAreaView, FlatList, StyleSheet, ScrollView, Button,List} from 'react-native'
// import Video from "react-native-video";


// function VideoList(){

//     const [isPlaying, setIsPlaying] = React.useState(false);  
//     const [isMuted, setIsMuted] = React.useState(false);  


//     const videoPlayer = React.useRef();

//     const goFullScreen = () => {  
//         if (videoPlayer.current) {  
//             videoPlayer.current.presentFullscreenPlayer();  
//         }  
//     };

//     return (
//         <View>
//             <Video  
//                 style={{width:300, height:300}}
//                 source={require('../../asserts/video.mp4')}                  // the video file
//                 //paused={true}                  // make it start    
//                 //style={styles.backgroundVideo}  // any style you want
//                 // repeat={true}                   // make it a loop
//             />
//             <Button
//                 onPress={() => setIsPlaying(p => !p)}  
//                 title={isPlaying ? 'Stop' : 'Play'}  
//             />  
//             <Button
//                 onPress={() => setIsMuted(m => !m)}  
//                 title={isMuted ? 'Unmute' : 'Mute'}  
//             />  
//         </View>
        
//     )
// }

// var styles = StyleSheet.create({
//     backgroundVideo: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       bottom: 0,
//       right: 0,
//     },
//   });



         
// export default VideoList












// function VideoList() {  
//     const [isPlaying, setIsPlaying] = React.useState(false);  
//     const [isMuted, setIsMuted] = React.useState(false);  

//     const togglePlaying = () => {};  

//     return (  
//         <View>  
//             <Video
//                 source={{ url: 'https://www.example.com/video.mp4'}}
//                 paused={!isPlaying}  
//                 controls={true}  
//                 style={styles.backgroundVideo}  
//                 muted={isMuted}  
                
//             />  
//             <Button
//                 onPress={() => setIsPlaying(p => !p)}  
//                 title={isPlaying ? 'Stop' : 'Play'}  
//             />  
//             <Button
//                 onPress={() => setIsMuted(m => !m)}  
//                 title={isMuted ? 'Unmute' : 'Mute'}  
//             />  
//         </View> 
//     );  
// }

         
//export default VideoList

















// import React from "react";
// import {Text, View, SafeAreaView, FlatList, StyleSheet, ScrollView} from 'react-native'
// import { Card } from "@ui-kitten/components";


// import { Card } from "@ui-kitten/components";

// const VideoList =()=>{

//     const data = [
//         {
//             id:1,
//             name:'https://www.youtube.com/watch?v=VozPNrt-LfE',
//             name_1:'react-native',
//             time:'2'
//         },
//         {
//             id:1,
//             name:'https://www.youtube.com/watch?v=VozPNrt-LfE',
//             name_1:'react-native',
//             time:'2'
//         },
//         {
//             id:1,
//             name:'https://www.youtube.com/watch?v=VozPNrt-LfE',
//             name_1:'react-native',
//             time:'2'
//         },
//         {
//             id:1,
//             name:'https://www.youtube.com/watch?v=VozPNrt-LfE',
//             name_1:'react-native',
//             time:'2'
//         }
//     ]
//     return(
//          <SafeAreaView>
//              <FlatList 
//                 data={data}
//                 keyExtractor={(item, index)=>`${index}`}
//                 renderItem = {(item, index)=>{
//                     return(
//                         <ScrollView>
//                             <View>
//                                     <View>
//                                         <Text style={styles.title}>{item.name_1}</Text>
//                                     </View>
                                
//                                     <View>
//                                         <Text>Time Duration:{item.time}min</Text>
//                                     </View>
                                
//                             </View>

//                         </ScrollView>
//                     )
//                 }}
//              />
//          </SafeAreaView>
//     )
// }

// export default VideoList

// const styles=StyleSheet.create({
//     title:{
//         fontSize:18
//     }
// })