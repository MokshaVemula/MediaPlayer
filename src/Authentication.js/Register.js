import React from 'react';
import {Text, View, StyleSheet,Image, TextInput, Pressable, Button,TouchableWithoutFeedback, Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Register = () =>{

    

    return(
        <View style = {styles.container} > 
            <LinearGradient colors={['blue', 'skyblue', 'white' ]} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.account}>Create Account</Text>
                    <View style={styles.textContainer}>
                        <LinearGradient colors={['pink', 'yellow', 'pink' ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20, }}>
                            <View style={styles.flexView}>
                                <Icon name='person' size={34} style={{paddingLeft:20, color:'black'}}/>
                                <TextInput 
                                    placeholder='Enter your First Name' 
                                    style={styles.input}
                                />
                            </View>
                            
                        </LinearGradient>
                        <LinearGradient colors={['pink', 'yellow', 'pink' ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20, }}>
                            <View style={styles.flexView}>
                                <Icon name='person' size={34} style={{paddingLeft:20, color:'black'}}/>
                                <TextInput 
                                    placeholder='Enter your Last Name' 
                                    style={styles.input}
                                />
                            </View>
                            
                        </LinearGradient>
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
                        <LinearGradient colors={['pink', 'yellow', 'pink']}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20}}>
                            <View style={styles.flexView}>
                                <Icon name='lock' size={34} style={{paddingLeft:20, color:'black'}}/>
                                <TextInput 
                                    placeholder='Confirm your Password' 
                                    style={styles.input}
                                />
                            </View>
                            
                    </LinearGradient>
                    </View>
                    <Pressable style={styles.register}>
                        <Text style={{color:'#4286f4', marginRight:8, fontSize:18, fontWeight:'800',paddingBottom:20 }}> Login Here</Text>
                        <Icon name='east' size={24} style={{color:'#4286f4',paddingBottom:20}}/>
                    </Pressable>
                    <LinearGradient colors={['blue', 'skyblue', '#006Db2' ]} style={styles.registerHere} start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }}>
                        <Pressable style={styles.Login}>
                            <Text style={{color:'white', marginRight:8, fontSize:24, fontWeight:'800', }}>Register</Text>
                            <Icon name='east' size={24} style={{color:'white'}}/>
                        </Pressable>
                    </LinearGradient>
                                   
                </View>
            </LinearGradient>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    
   
    textContainer:{
        
        borderRadius:40,
        //backgroundColor:'white',
        //height:'80%',
        
        width:'90%',
        
        paddingBottom:30,
        paddingHorizontal:20
       
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: '100%',
        width: '100%',
        paddingVertical:40
      },
      input:{
        height: 50,
        width:'90%',
        margin: 12,
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
        marginLeft:200,
        
        
      },
      Login:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:20
      },
      account:{
          fontSize:40 ,
          fontWeight:'bold',
          color:'white',
          fontWeight:'bold',
          padding:30,
          
          
      },
      registerHere:{
          borderRadius:20,
          
      }
    
})