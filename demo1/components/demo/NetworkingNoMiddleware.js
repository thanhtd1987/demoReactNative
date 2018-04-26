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

import {connect, Provider} from 'react-redux';
import {bindActionCreators, createStore} from 'redux';

import * as actionName from '../../redux/actions/teaActions'
import allReducers from '../../redux/reducers'

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

class NetworkingDemo extends Component {

  actions() { return this.props.actions}

  toggleLoadingForChangingList(toggle) {
    this.actions().toggleLoading(toggle)
    this.actions().changingItem(toggle)
  }

  componentDidMount() {
      this.refreshDataFromServer()
  }

  refreshDataFromServer = () => {
      this.actions().toggleLoading(true)
      getTeaFromServer().then( (teaFromServer)=> {
          this.actions().toggleLoading(false)
          this.actions().addTeaList(teaFromServer)
      }).catch((error)=>{
          this.actions().toggleLoading(false)
          // this.setState({ teas: [] })
      })
  }

  onRefresh= () => {
      if(!this.props.changingItems) {
        // this.setState({ teas: [] })
        this.refreshDataFromServer()
      }
  }

  insertTea = ()=> {
    this.toggleLoadingForChangingList(true)
    const newTea = {
        id: this.props.teas.lenght,
        name:'king of tea',
        image: 'https://media.foody.vn/res/g70/691323/s600x600/20171111143543-tra-chanh-leo-cam-buoi.jpg',
        description: 'tea with many flavors'
    }

    insertNewTeaToServer(newTea).then( (result)=> {
      this.actions().addTea(newTea.name, newTea.description, newTea.image)
      this.toggleLoadingForChangingList(false)
    }).catch((error)=>{
        this.toggleLoadingForChangingList(false)
    })
  }

  updateSelectedItem(item)  {
    if(this.props.selectedItem != item) {
      if(this.props.selectedItem != null
        && this.props.teas.findIndex(tea=> tea == this.props.selectedItem.getItem()) != -1)
        this.props.selectedItem._selectItem(false)
      this.actions().updateSelectedItem(item)
    } else {
      this.actions().updateSelectedItem(null)
    }
  }

  editTea = ()=> {
    if(this.props.selectedItem != null) {
      this.toggleLoadingForChangingList(true)

      let editItem = this.props.selectedItem.getItem()
      editItem.name += ' edited'
      editItem.description += ' edited'

      editTeaInServer(editItem).then( (result)=> {
        this.toggleLoadingForChangingList(false)
        this.actions().editTea(editItem.id, editItem.name, editItem.description)
      }).catch( (error)=>{
        this.toggleLoadingForChangingList(false)
        alert(`Edit Error: ${error}`)
      })
    }
  }

  deleteTeaItem = ()=> {
    if(this.props.selectedItem !=null) {
      this.toggleLoadingForChangingList(true)

      let id = this.props.selectedItem.getItem().id

      deleteTeaInServer(id).then( (result)=> {
        this.actions().deleteTea(id)
        this.toggleLoadingForChangingList(false)
      }).catch( (error)=> {
        this.toggleLoadingForChangingList(false)
        alert(`DELETE Error: ${error}`)
      })
    }
  }

  //render component
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{flex: 1}} >Test fetch data from server </Text>

          <Button style={{marginRight: 15}} color='red' title='DELETE' onPress={ this.deleteTeaItem}   />

          <Button style={{marginRight: 15}} color='green' title='EDIT' onPress={ this.editTea}   />

          <Button style={{marginRight: 15}}  title='ADD' onPress={ this.insertTea}   />

        </View>

        <FlatList style={{borderTopColor:'red', borderTopWidth: 2}}
            ref={'flatlist'}
            data={this.props.teas}
            renderItem={({item, index})=> {
                return(
                    <FlatListItem item={item} index={index} parentFlatList={this}
                    ></FlatListItem>
                )
            }}
            keyExtractor={(item, index) => item.id.toString()}
            refreshControl={
                <RefreshControl
                    refreshing={this.props.refreshing}
                    onRefresh={this.onRefresh}
            />}
        ></FlatList>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teas: state.teaReducers.teas,
    lastId: state.teaReducers.lastEditedId,
    refreshing: state.displayReducers.refreshing,
    changingItems: state.displayReducers.changingItems,
    selectedItem: state.displayReducers.selectedItem,
  }
}

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actionName, dispatch) })

const ContainerNetworkingRedux = connect(mapStateToProps, mapDispatchToProps)(NetworkingDemo)

export default class NetworkingWithRedux extends Component {
  render() {
    let store = createStore(allReducers)
    return (
      <Provider store={store}>
        <ContainerNetworkingRedux />
      </Provider>
    );
  }
}
