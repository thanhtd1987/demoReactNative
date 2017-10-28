import React, {Component} from 'react';
import{
    View, Text,StyleSheet
}from 'react-native';

class calculator extends Component{
    render(){
        return(
            <View style={{flexDirection:'column'}}>
                <View style={myStyle.item_column}>
                    <View style={myStyle.item_row}>
                        <Text style={myStyle.big_number}>2</Text>
                        <Text style={{flex:1, color:'blue'}}ABC></Text>
                    </View>
                    <View style={myStyle.item_row}>
                        <Text style={myStyle.big_number}>2</Text>
                        <Text style={{flex:1, color:'blue'}}ABC></Text>
                    </View>
                    <View style={myStyle.item_row}>
                        <Text style={myStyle.big_number}>2</Text>
                        <Text style={{flex:1, color:'blue'}}ABC></Text>
                    </View>
                </View>
                <View style={myStyle.item_column}>
                    <View style={myStyle.item_row}></View>
                    <View style={myStyle.item_row}></View>
                    <View style={myStyle.item_row}></View></View>
                <View style={myStyle.item_column}>
                    <View style={myStyle.item_row}></View>
                    <View style={myStyle.item_row}></View>
                    <View style={myStyle.item_row}></View></View>
                <View style={myStyle.item_column}>
                    <View style={myStyle.item_row}></View>
                    <View style={myStyle.item_row}></View>
                    <View style={myStyle.item_row}></View></View>
                <View style={{justifyContent:'center', alignContent:'center'}}></View>
            </View>
        );
    }
}

var myStyle = StyleSheet.create({
    item_column:{
        paddingTop:10,
        paddingBottom:10,
        borderBottomColor:'gray',
        borderBottomWidth:1,
        flex:1,
        flexDirection:'row'
    },
    item_row:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'white',
        flexDirection:'column'
    },
    big_number:{
        fontSize:40,
        flex:1
    }

});