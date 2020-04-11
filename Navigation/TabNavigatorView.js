

import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Badge } from 'react-native-elements';

import HomeScreen from '../view/Home/navigation';
import ActiveScreen from '../view/Active/navigation';
import DetailScreen from '../view/Detail/first';
import CarScreen from '../view/Car/navigation';
import MineScreen from '../view/Mine/navigation';

const homeIcon = require('../images/tabbar/home.png');
const homeSelected = require('../images/tabbar/home_selected.png');
const activeIcon = require('../images/tabbar/active.png');
const activeSelected = require('../images/tabbar/active_selected.png');
const detailIcon = require('../images/tabbar/detail.png');
const detailSelected = require('../images/tabbar/detail_selected.png');
const carIcon = require('../images/tabbar/car.png');
const carSelected = require('../images/tabbar/car_selected.png');
const profileIcon = require('../images/tabbar/profile.png');
const profileSelected = require('../images/tabbar/profile_selected.png');
//底部公共样式
const tableBar_common = {
  activeTintColor: 'red',
  inactiveTintColor: 'blue',
  style: {
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
 
  },
  tabStyle: {
    height: 65,
   // backgroundColor: 'pink',
  
   
  },
  labelStyle: {
    fontSize: 16,
    margin: 0,
  },
};
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          if (focused) {
            return (
              <Image 
              style={{width:35,height:35}}
              source={homeSelected} />
            );
          } else {
            return <Image 
            style={{width:35,height:35}}
            source={homeIcon} />;
          }
        },
      }),
    },
    Active: {
      screen: ActiveScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '活动',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          if (focused) {
            return (
              <Image
                style={{width:40,height:40}}
                source={activeSelected}
              />
            );
          } else {
            return (
              <Image style={{width:40,height:40}} source={activeIcon} />
            );
          }
        },
      }),
    },

    Detail: {
      screen: DetailScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '疫情',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          if (focused) {
            return (
              <Image
                style={{width:28,height:28}}
                source={detailSelected}
              />
            );
          } else {
            return (
              <Image
              style={{width:28,height:28}}
                source={detailIcon}
              />
            );
          }
        },
      }),
    },
    Car: {
      screen: CarScreen,
      params: {title: '购物车'},
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '购物车',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          if (focused) {
            return (
              <>
              <Badge status='error' value="4" 
               containerStyle={{ position: 'absolute', top: 2, right: 12}}
              />
              <Image
              style={{width:32,height:32}}
                source={carSelected}
              />
              </>
            );
          } else {
            return (
              <Image
              style={{width:32,height:32}}
                source={carIcon}
              />
            );
          }
        },
      }),
    },
    Mine: {
      screen: MineScreen,
      params: {title: '我的'},
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          if (focused) {
            return (
              <Image
              style={{width:30,height:30}}
                source={profileSelected}
              />
            );
          } else {
            return (
              <Image
              style={{width:30,height:30}}
                source={profileIcon}
              />
            );
          }
        },
      }),
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: tableBar_common,
  },
);

const styles = StyleSheet.create({
  tableBar_image: {
    width: 40,
    height: 40,
    backgroundColor:'white'
  },
  tableBar_active_image: {
    width: 50,
    height: 50,
    backgroundColor:'white'
  },
});

const TabNavigatorView = createAppContainer(TabNavigator);
export default TabNavigatorView;

