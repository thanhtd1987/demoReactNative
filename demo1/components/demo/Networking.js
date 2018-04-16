import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    RefreshControl,
    Button,
    TouchableWithoutFeedback,
} from 'react-native';

import { getTeaFromServer, insertNewTeaToServer } from '../../networking/Server';

class FlatListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  _selectItem = (select) => {
    this.setState( {selected: select})
    this.props.parentFlatList.updateSelectedItem(this)
  }

    render() {
      return (
        <TouchableWithoutFeedback style={{flex: 1}} onPress={() => {this._selectItem(!this.state.selected)} }>
        <View style={{flex: 1,
            flexDirection: 'row',
            backgroundColor: this.state.selected == true ? 'seagreen' :'lightseagreen',
            borderBottomWidth: 1,
            borderBottomColor: 'white'

          }} >
            <Image source={{uri:this.props.item.image}}
            style={{width: 100, height: 100, margin: 5}}
            />

          <View style={{flex: 1, flexDirection: 'column',}} >
                <Text style={{flex: 50, fontSize: 18, color: 'purple', }}>{this.props.item.name}</Text>
                <Text style={{flex: 50, color: 'blue'}}>{this.props.item.description}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
      )
    };
}

export default class NetworkingDemo extends Component {
    constructor(props){
        super(props)
        this.state = {
            refreshing: false,
            addItem: false,
            teas: [],
            selectedItem: null,
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
        if(!this.state.addItem) {
          this.setState({ teas: [] })
          this.refreshDataFromServer()
        }
    }

    insertTea = ()=> {
      this.setState({ refreshing: true, addItem: true})
      const newTea = {
          id: this.state.teas.lenght,
          name:'king of tea',
          image: 'https://media.foody.vn/res/g70/691323/s600x600/20171111143543-tra-chanh-leo-cam-buoi.jpg',
          description: 'tea with many flavors'
      }

      insertNewTeaToServer(newTea).then( (result)=> {
        this.setState({ })
        this.setState( (preState)=> {
          let tempt = preState.teas.concat(result)
          return { teas: tempt, refreshing: false, addItem: false }
        })
      }).catch((error)=>{
          this.setState({ refreshing: false, addItem: false})
      })
    }

  updateSelectedItem(item)  {
    if(this.state.selectedItem != item) {
      if(this.state.selectedItem != null)
        this.state.selectedItem._selectItem(false)
      this.setState({selectedItem: item})
    } else {
      this.setState({selectedItem: null})
    }
  }

  editTea = ()=> {
    
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{flex: 1}}> Test fetch data frrom server </Text>

          <Button style={{marginRight: 15}} title='EDIT' onPress={ this.insertTea}   />

          <Button style={{marginRight: 15}} title='ADD' onPress={ this.insertTea}   />

        </View>

        <FlatList style={{borderTopColor:'red', borderTopWidth: 2}}
            ref={'flatlist'}
            data={this.state.teas}
            renderItem={({item, index})=> {
                return(
                    <FlatListItem item={item} index={index} parentFlatList={this}
                    ></FlatListItem>
                )
            }}
            keyExtractor={(item, index) => item.id.toString()}
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
