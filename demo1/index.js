// import { AppRegistry } from 'react-native';
// import App from './App';
import Calculator from './ex_calculator';

import React, {Component} from "react";
import {
    AppRegistry, View, Text, StatusBar, StyleSheet
} from "react-native"

class Demo1 extends Component{
    // constructor(props){
    //         super(props);
    //         console.log("constructor");
    // }

    // componentWillMount(){
    //     console.log("will mount");
    // }
    // componentDidMount(){
    //     console.log("did mount");
    // }

    render(){
        console.log("render");
        return(
            // <StatusBar hidden="true"></StatusBar>

            <View style={myStyle.bao}>
            //     <Text style={myStyle.tomtat}>Hello world!</Text>
            //     <Text style={myStyle.tieude}>Text 2, 2 style</Text>
            //     <Text style={{backgroundColor:'violet',flex:1}}></Text>
            </View>


        );
    }


}

var myStyle = StyleSheet.create({

    bao:{
        backgroundColor:'blue',
        // width:200,
        // height:300,
        marginLeft:50,
        paddingLeft:20,
        flex:1,
        flexDirection:"row" //row or column
    },

    tieude:{
        backgroundColor:'gray',
        color:'red',
        // marginTop:50,
        flex:2
    },
    tomtat:{
        backgroundColor:"yellow",
        color:'blue',
        // marginTop:30,
        flex:3
    },



});

AppRegistry.registerComponent('demo1', () => Calculator);
// AppRegistry.registerComponent('demo1', () => Demo1);
