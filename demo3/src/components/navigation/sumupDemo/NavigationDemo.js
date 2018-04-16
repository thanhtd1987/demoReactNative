/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator
} from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './tabs/Home'
import Settings from './tabs/Settings'
import Modal from './screens/Modal'
import Profile from './screens/Profile'
import Drawer from './Drawer'

const SettingsTab = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null,
      headBackTitle: 'Back'
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation})=> ({
      title: `${navigation.state.params.user}'s Profile'`
    })
  }, Modal: {
    screen: Modal
  },
}, {
  headerMode: 'screen'
}
)

// Tab navigation for Home and Settings screens
const TabNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    },
  },
  Settings: {
    screen: SettingsTab,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-settings' : 'ios-settings-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    },
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon : true,
    labelStyle: {
      fontSize: 12,
      margin: 0
    },
  }
});

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = DrawerNavigator({
  Tabs: {
    screen: TabNavigation,
  }
},
{
  // Register custom drawer component
  contentComponent: props => <Drawer {...props} />
}
);

// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
const SumupDemo = StackNavigator({
  TabsWithDrawer: {
    screen: TabsWithDrawerNavigation,
  },
  Modal: {
    screen: Modal
  },
}, {
  // In modal mode screen slides up from the bottom
  mode: 'modal',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
  headerMode: 'none',
});

export default class NavigationDemo extends Component {
  render() {
    return (
      <SumupDemo />
    );
  }
}
