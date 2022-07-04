import React,{useState} from 'react';
import {Text, View, StyleSheet,Image, TextInput, Pressable, Button, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'
import auth from '@react-native-firebase/auth';
import {useSelector,useDispatch} from "react-redux";
import {setEmail,setPassword,getUserUid} from "../redux/actions";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) =>{
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const dispatch =useDispatch()
    const storeData = useSelector((state)=>state)
    const {email,password,uid}=useSelector(state=>state.userReducer);

    
    const signin = (email, password) => {
        if (email.length==0){
          Alert.alert("Enter Email")
        }else if(password.length==0){
          Alert.alert("Enter Password")
        }
        else{
          auth().signInWithEmailAndPassword(email, password).then(
            function(result){
              // console.log(uid);
              console.log(result.user);
              const value= result.user.uid;
              dispatch(getUserUid(value));
              console.log('.....',value);
              AsyncStorage.setItem('token', value);
              // console.log('..........',storeData.userReducer.uid)
            }
          ).catch(
            function(e){
              if (e.code==="auth/user-not-found"){
                return(Alert.alert("In correct email"))
              }else if(e.code==="auth/wrong-password"){
                return(Alert.alert("The password is invalid"))
              }else if(e.code==="auth/invalid-email"){
                return(Alert.alert("Enter valid email"))
    
              }
              else{
                return(console.log(e.message),Alert.alert(e.code))
              }
             
            });
        }
      };  
        
        
    return(
        <View style = {styles.container} >
            <LinearGradient colors={['red', 'yellow', 'green' ]} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }}>
                <View style={[styles.Iconcontainer,{alignItems:'center',justifyContent:'center'}]}>
                
                    <Image source={require('../asserts/playIcon.png')} style={styles.logoIcon}/>
                    <Text style={{fontWeight:'bold', color:'black',fontSize:22,padding:10 }}>Login</Text>
        
                </View>
                <View style={[styles.textContainer,{alignItems:'center',justifyContent:'center'}]}>
                    <LinearGradient colors={['pink', 'yellow', 'pink' ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20, }}>
                        <View style={styles.flexView}>
                            <Icon name='email' size={34} style={{paddingLeft:20, color:'black'}}/>
                            <TextInput 
                                placeholder='Enter your Email' 
                                style={styles.input}
                                value={email}
                                onChangeText={(value)=>dispatch(setEmail(value))}
                                keyboardType='email-address'
                            />
                        </View>
                        
                    </LinearGradient>
                    <LinearGradient colors={['pink', 'yellow', 'pink']}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20}}>
                        <View style={styles.flexView}>
                            <Icon name='lock' size={34} style={{paddingLeft:20, color:'black'}}/>
                            <TextInput 
                                placeholder='Enter your Password' 
                                style={styles.input}
                                value={password}
                                onChangeText={(value)=>dispatch(setPassword(value))}
                                secureTextEntry={true}
                            />
                        </View>
                        
                    </LinearGradient>
                    <Pressable style={styles.register} onPress={()=>navigation.navigate('Register')}>
                        <Text style={{color:'#4286f4', marginRight:8, fontSize:18, fontWeight:'800', }}>Register Here</Text>
                        <Icon name='east' size={24} style={{color:'#4286f4'}}/>
                    </Pressable>
                    <Pressable style={styles.Login} onPress={() => signin(email, password)}>
                        <Text style={{color:'white', marginRight:8, fontSize:24, fontWeight:'800', }}>Login</Text>
                        <Icon name='east' size={24} style={{color:'white'}}/>
                    </Pressable>
                                   
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
        marginBottom:40
      },
      Login:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:'#58a63e',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:20
      }
    
})