import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Agnihotra from '../screens/agnihotra';
import Feed from '../screens/feed';
import More from '../screens/more';
import MyTabBar from './MyTabBar';

const Tab = createBottomTabNavigator();

function CustomTabbar(props) {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen
          name="home"
          component={Home}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation?.navigate('home');
            },
          })}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/home.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="agnihotra"
          component={Agnihotra}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('agnihotra');
            },
          })}
          options={{
            tabBarLabel: 'Agnihotra',
            tabBarIcon: () => (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/local_fire_department.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="feed"
          component={Feed}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('feed');
            },
          })}
          options={{
            tabBarLabel: 'My Feed',
            tabBarIcon: active => (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/book_4.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="more"
          component={More}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('more');
            },
          })}
          options={{
            tabBarLabel: 'More',
            tabBarIcon: active => (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/menu.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
export default CustomTabbar;
