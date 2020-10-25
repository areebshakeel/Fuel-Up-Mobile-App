import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const button = function () {
  return (
    <View style={{flex:0.2,alignItems:'center', backgroundColor:'orange', borderRadius:10, width:300, padding:10}}>
      <TouchableOpacity>
        <Text style={{color:'white'}}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default button;
