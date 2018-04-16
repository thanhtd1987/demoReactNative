/* @flow */
import { StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation'
import React, { Component } from 'react';
import {Dimensions} from 'react-native'


import {
  MainScreen,
  DetailScreen,
  ThirdScreen,
  Home,
  Setting,
  Info,
  Cloud
} from '../../../constant/screenName'
//stack
import MainComponent from './stack/MainComponent'
import DetailComponent from './stack/DetailComponent'
import ThirdComponent from './stack/ThirdComponent'

const StackNavigationDemo = StackNavigator({
  MainScreen: {
    screen: MainComponent,
    // navigationOptions: {
    //   headerTitle: 'Main'
    // }
  },
  DetailScreen: {
    screen: DetailComponent,
    // navigationOptions: {
    //   headerTitle: 'Detail'
    // }
  },
  ThirdScreen: {
    screen: ThirdComponent,
    navigationOptions: {
      headerTitle: 'Third'
    }
  },

})

//tabs
import HomeComponent from './tabs/HomeComponent'
import InfoComponent from './tabs/InfoComponent'
import SettingComponent from './tabs/SettingComponent'
import CloudComponent from './tabs/CloudComponent'

let routeConfigs = {
  Home: {
    screen: HomeComponent,
  },
  Info: {
    screen: InfoComponent
  },
  Setting: {
    screen: SettingComponent
  },
  Cloud: {
    screen: CloudComponent
  },
}

let tabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon : true,
    // showLabel: false,
    activeTintColor: 'purple',
    labelStyle: {
      fontSize: 12,
      margin: 0
    },
    tabStyle: {
      height: 45,
    },
    style: {
      backgroundColor: 'cadetblue',
      padding: -10,
      // flexDirection: 'row'
    },
  },
  // order: [Setting, Home, Cloud, Info],
}

const TabNavigatorDemo =  TabNavigator(routeConfigs, tabNavigatorConfig)

//Drawer
let {height, width} = Dimensions.get('window')
let drawerNavigatorConfig = {
  // initialRouteName: Home,
  drawerWidth: width /2,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerBackgroundColor: 'lightblue',
  contentOptions: {
    activeTintColor: 'blue'
  },

}

const DrawerNavigatorDemo = DrawerNavigator(routeConfigs, drawerNavigatorConfig)

export default class NavigationDemo extends Component {
  render() {
    return (
      // <StackNavigationDemo />
      // <TabNavigatorDemo />
      <DrawerNavigatorDemo />
    );
  }
}
