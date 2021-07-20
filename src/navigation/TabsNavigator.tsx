import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchScreen from '../screen/SearchScreen';
import StackNavigator from './StackNavigator';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        tabBarOptions={{
            activeTintColor: '#5856D6',
            labelStyle: {
                marginBottom: (Platform.OS === 'ios') ? 0 : 10
            },
            style: {
                position:'absolute',
                backgroundColor: 'rgba(255,255,255,0.85)',
                borderWidth: 0,
                elevation: 0,
                height: (Platform.OS === 'ios') ? 80 : 60

            }
        }}
    >
        <Tab.Screen 
            name="StackNavigator" 
            component={StackNavigator}
            options={{
                tabBarLabel: 'Pokemons',
                tabBarIcon: ({color}) => (
                    <Icon 
                        name='albums-outline' 
                        color={color} 
                        size={25}
                    />)
            }}
        />
        <Tab.Screen 
            name="SearchScreen"   
            component={SearchScreen} 
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({color}) => (
                    <Icon 
                        name='search-outline' 
                        color={color} 
                        size={25}
                    />)
            }}/>
    </Tab.Navigator>
  );
}

export default TabsNavigator;