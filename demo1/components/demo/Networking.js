import React, { Component } from 'react';
import {  
    View, 
    Text, 
    FlatList,
    Image,
    StyleSheet,
    RefreshControl,
} from 'react-native';

import { getTeaFromServer } from '../../networking/Server';

class FlatListItem extends Component {
    render() {
      return (
        <View style={{flex: 1, flexDirection: 'row', backgroundColor:'yellow'}} >
            <Image source={{uri:this.props.item.image}}
            style={{width: 100, height: 100, margin: 5}}
            />

            <View style={{flex: 1, flexDirection: 'column'}} >
                <Text style={{flex: 50, fontSize: 18, color: 'purple'}}>{this.props.item.name}</Text>
                <Text style={{flex: 50, color: 'blue'}}>{this.props.item.description}</Text>
            </View>
        </View>
      )
    };
}

export default class NetworkingDemo extends Component {
    constructor(props){
        super(props)
        this.state = {
            refreshing: false,
            teas: [],
        }
    }

    componentDidMount() {
        this.refreshDataFromServer()
    }

    refreshDataFromServer = () => {
        this.setState({ refreshing: true})
        getTeaFromServer().then( (teaFromServer)=> {
            this.setState({ refreshing: false})
            this.setState({ teas: teaFromServer })
        }).catch((error)=>{
            this.setState({ refreshing: false})
            this.setState({ teas: [] })
        })
    }

    onRefresh= () => {
        this.setState({ teas: [] })
        this.refreshDataFromServer()
    }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text> Test fetch data frrom server </Text>
        <RefreshControl />
        <FlatList style={{borderTopColor:'red', borderTopWidth: 2}}
            ref={'flatlist'}
            data={this.state.teas}
            renderItem={({item, index})=> {
                return(
                    <FlatListItem item={item} index={index} parentFlatList={this}
                    ></FlatListItem>
                )
            }}
            keyExtractor={(item, index) => item.id}
            refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing} 
                    onRefresh={this.onRefresh}
            />}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({

})