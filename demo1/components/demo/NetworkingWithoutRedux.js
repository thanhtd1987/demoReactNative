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

import { getTeaFromServer, insertNewTeaToServer, editTeaInServer, deleteTeaInServer } from '../../networking/Server';

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

  getItem() {
    return( this.props.item)
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
            changingItems: false,
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
        if(!this.state.changingItems) {
          this.setState({ teas: [] })
          this.refreshDataFromServer()
        }
    }

    insertTea = ()=> {
      this.setState({ refreshing: true, changingItems: true})
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
          return { teas: tempt, refreshing: false, changingItems: false }
        })
      }).catch((error)=>{
          this.setState({ refreshing: false, changingItems: false})
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
    if(this.state.selectedItem != null) {
      this.setState({ refreshing: true, changingItems: true})
      let editItem = this.state.selectedItem.getItem()
      editItem.name += ' edited'
      editItem.description += ' edited'
      
      editTeaInServer(editItem).then( (result)=> {
        this.setState({ refreshing: false, changingItems: false})
        this.setState( (preState)=> {
          let index = preState.teas.findIndex(tea => tea.id === result.id)
          let editTeas = preState.teas
          editTeas[index] = result
          return {teas : editTeas}
        })
      }).catch( (error)=>{
        this.setState({ refreshing: false, changingItems: false})
        alert(`Edit Error: ${error}`)
      })
    }
  }

  deleteTea = ()=> {
    if(this.state.selectedItem !=null) {
      this.setState({refreshing: true, changingItems: true})
      let id = this.state.selectedItem.id

      deleteTeaInServer(id).then( (result)=> {
        this.setState( (preState)=>{
          let deletedTeas = preState.teas
          let index = deletedTeas.findIndex(tea => tea.id === result.id)
          deletedTeas.splice(index, 1)

          return {teas: deletedTeas}
        })
      }).catch( (error)=> {
        this.setState({ refreshing: true, changingItems: true})
      })
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{flex: 1}} >Test fetch data from server </Text>

          <Button style={{marginRight: 15}} color='red' title='DELETE' onPress={ this.deleteTea}   />

          <Button style={{marginRight: 15}} color='green' title='EDIT' onPress={ this.editTea}   />

          <Button style={{marginRight: 15}}  title='ADD' onPress={ this.insertTea}   />

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
