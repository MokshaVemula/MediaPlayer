import React from 'react';
import {Text, View, StyleSheet,Image, TextInput, Pressable, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Login = () =>{
    return(
        <View style = {styles.container} >
            <LinearGradient colors={['red', 'yellow', 'green' ]} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }}>
                <View style={[styles.Iconcontainer,{alignItems:'center',justifyContent:'center'}]}>
                
                    <Image source={require('../asserts/playIcon.png')} style={styles.logoIcon}/>
        
                </View>
                <View style={[styles.textContainer,{alignItems:'center',justifyContent:'center'}]}>
                    <LinearGradient colors={['pink', 'yellow', 'pink' ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20, }}>
                        <View style={styles.flexView}>
                            <Icon name='email' size={34} style={{paddingLeft:20, color:'black'}}/>
                            <TextInput 
                                placeholder='Enter your Email' 
                                style={styles.input}
                            />
                        </View>
                        
                    </LinearGradient>
                    <LinearGradient colors={['pink', 'yellow', 'pink']}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20}}>
                        <View style={styles.flexView}>
                            <Icon name='lock' size={34} style={{paddingLeft:20, color:'black'}}/>
                            <TextInput 
                                placeholder='Enter your Password' 
                                style={styles.input}
                            />
                        </View>
                        
                    </LinearGradient>
                    <Pressable style={styles.register}>
                        <Text style={{color:'blue', marginRight:10, fontSize:18, fontWeight:'800'}}>Register Here</Text>
                        <Icon name='east' size={24} style={{color:'blue'}}/>
                    </Pressable>
                    <Button title='Login'/>                    
                </View>
            </LinearGradient>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Iconcontainer:{
        flex:0.4,
        
    },
    logoIcon:{
        height:150,
        width:150,
        borderRadius:30,
    },
    textContainer:{
        flex:0.6,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:'white',
        height:'100%',
        width:'100%'
        
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: '100%',
        width: '100%',
      },
      input:{
        height: 50,
        width:'90%',
        margin: 12,
        //borderWidth: 4,
        //borderColor:'yellow',
        padding: 10,
        borderRadius:20,
        color:'black',
        fontSize:18,
    
      },
      Icon:{
          height:40,
          width:40,
          marginLeft:10,
      },
      flexView:{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          borderColor:'yellow',
          borderWidth: 4,
          borderRadius:20,
          height:60,
      },
      register:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginLeft:200
      }
    
})