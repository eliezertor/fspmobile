import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MoviesScreen from './MovieScreen';
import TvScreen from './TvScreen';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Settings') {
            iconName = focused
              ? 'account-settings'
              : 'account-settings-outline';
          } else if (route.name === 'Movies') {
            iconName = focused ? 'movie-open' : 'movie-open-outline';
          } else if (route.name === 'TV') {
            iconName = focused ? 'md-tv' : 'md-tv-outline';
          }

          if (route.name === 'TV') {
            return <Ionicons name={iconName} size={size} color={color} />;
          } else {
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        style: {
          height: 55,
        },
        labelPosition: 'beside-icon',
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="TV" component={TvScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNavigator;
