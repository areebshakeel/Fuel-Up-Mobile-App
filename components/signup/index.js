import React from 'react';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../../assets/logo.png'
import Button from '../buttons'
import Google from '../buttons/google'
import Facebook from '../buttons/facebook'
import Twitter from '../buttons/twitter'


const signup=function(){
    return(
        <ScrollView>
        <View style={{flex:0.5}}>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Image source={Logo} style={{height:200,width:370,}} />
                    
            </View>

            <View style={styles.inputContainer}> 
                <View >
                    <TextInput placeholder='  Email or Phone number' style={styles.inputs}/>
                </View>
                <View style={{marginTop:30}}>
                <TextInput placeholder='  Password' style={styles.inputs}/>
                </View>
                <View style={{marginTop:30}}>
                <TextInput placeholder='  Confirm Password' style={styles.inputs}/>
                </View>
                <View style={{marginTop:30}}>
                    <Button/>
                </View>
                
            </View>
            <View style={{flex:1,alignItems:'center', marginTop:30}}>
                <Text style={{color:'grey'}}>
                    or Signup with
                </Text>
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-evenly',alignItems:'center',marginTop:20}}>
                <View><Google/></View>
                <View><Facebook/></View>
                <View><Twitter/></View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    inputContainer:{
        flex:0.8,
        justifyContent: "space-evenly",
        alignItems:'center'
    },
    inputs:{
        borderLeftWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRadius:10,
        borderColor:'lightgrey',
        padding:5,
        width:300
    }
})

export default signup