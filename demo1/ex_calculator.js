import React, {Component} from 'react';
import{
    View, Text,StyleSheet
}from 'react-native';

export default class Calculator extends Component{
    render(){
        return(
          <View style={{flexDirection:"column",flex:1}}>
              <View style={myStyle.item_column}>
                  <View style={myStyle.item_row}>
                      <Text style={myStyle.big_number}>1</Text>
                      <Text style={myStyle.small_number}> </Text>
                  </View>
                  <View style={myStyle.item_row}>
                      <Text style={myStyle.big_number}>2</Text>
                      <Text style={myStyle.small_number}>ABC</Text>
                  </View>
                  <View style={myStyle.item_row}>
                      <Text style={myStyle.big_number}>3</Text>
                      <Text style={myStyle.small_number}>DEF</Text>
                  </View>
              </View>
              <View style={myStyle.item_column}>
                <View style={myStyle.item_row}>
                    <Text style={myStyle.big_number}>4</Text>
                    <Text style={myStyle.small_number}>GHI</Text>
                </View>
                <View style={myStyle.item_row}>
                    <Text style={myStyle.big_number}>5</Text>
                    <Text style={myStyle.small_number}>JKL</Text>
                </View>
                <View style={myStyle.item_row}>
                    <Text style={myStyle.big_number}>6</Text>
                    <Text style={myStyle.small_number}>MNO</Text>
                </View>
              </View>
              <View style={myStyle.item_column}>
                <View style={myStyle.item_row}>
                    <Text style={myStyle.big_number}>7</Text>
                    <Text style={myStyle.small_number}>PQRS</Text>
                </View>
                <View style={myStyle.item_row}>
                    <Text style={myStyle.big_number}>8</Text>
                    <Text style={myStyle.small_number}>TUV</Text>
                </View>
                <View style={myStyle.item_row}>
                    <Text style={myStyle.big_number}>9</Text>
                    <Text style={myStyle.small_number}>WXYZ</Text>
                </View>
              </View>
              <View style={myStyle.item_column}>
                  <View style={myStyle.item_row_gray}>
                    <Text style={myStyle.big_number}>*</Text>
                    <Text style={myStyle.small_number}> </Text>
                  </View>
                  <View style={myStyle.item_row}>
                      <Text style={myStyle.big_number}>0</Text>
                      <Text style={myStyle.small_number}>+</Text>
                  </View>
                  <View style={myStyle.item_row_gray}>
                    <Text style={myStyle.big_number}>#</Text>
                    <Text style={myStyle.small_number}> </Text>
                  </View>
              </View>

          </View>
        );
    }
}

var myStyle = StyleSheet.create({
  item_column:{
      borderBottomColor:'gray',
      borderBottomWidth:1,
      flex:1,
      flexDirection:'row'
  },
  item_row:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderRightColor:'gray',
      borderRightWidth:1,
      backgroundColor:'white',

  },
  big_number:{
      fontSize:40,
      color:'black'
  },
  small_number:{

  },
  item_row_gray:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderRightColor:'gray',
    borderRightWidth:1,
    backgroundColor:'gray'
  }

});
