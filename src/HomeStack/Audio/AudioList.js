import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const DATA = [
  {
    id: "1",
    title: "first song",
    song:'first_song.mp3'
    
  },
  {
    id: "2",
    title: "second song",
    song:'second_song.mp3'
  },
  {
    id: "3",
    title: "third song",
    song:'third_song.mp3'
   
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor, }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor,{alignItems:'center'}]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    
  </TouchableOpacity>
);

const AudioList = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#C13584' : "pink";
    const color = item.id === selectedId ? 'white' : 'black';
    // console.log('..........',item);
    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id), navigation.navigate('PlayMusic',{data:item})}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
    
      />

    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['darkblue', 'skyblue', 'darkblue', ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{flex:1, }}>
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

export {DATA, AudioList }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
    justifyContent:"center",
    //backgroundColor:'blue'
    
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:50,
    
  },
  title: {
    fontSize: 32,
  },
});

