import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const twitter = function () {
  return (
    <View style={{flex:0.2,alignItems:'center', borderRadius:12,  padding:18, borderColor:'lightgrey', borderRightWidth:1,borderLeftWidth:1,
    borderBottomWidth:1,borderTopWidth:1}}>
      <TouchableOpacity>
        <Icon color='#1DA1F2'  size={20} name='twitter'/>
      </TouchableOpacity>
    </View>
  );
};

export default twitter;
