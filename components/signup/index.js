import React from 'react';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';
import Logo from '../../assets/logo.png'

const signup=function(){
    return(
        <View style={{flex:0.5}}>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Image source={Logo} style={{height:200,width:370,}} />
                    
            </View>

            <View style={styles.inputContainer}> 
                <View>
                    <TextInput placeholder='  Email or Phone number' style={styles.inputs}/>
                </View>
                <View>
                <TextInput placeholder='  Password' style={styles.inputs}/>
                </View><View>
                <TextInput placeholder='  Confirm Password' style={styles.inputs}/>
                </View>
            </View>
        </View>
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