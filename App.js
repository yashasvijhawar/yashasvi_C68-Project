import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import FbScreen from './screens/fb';
import InsScreen from './screens/ins'

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FbScreen},
 Instagram:{screen:InsScreen},
})

const AppContainer = createAppContainer(TabNavigator)
