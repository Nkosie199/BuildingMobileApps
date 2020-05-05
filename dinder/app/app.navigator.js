import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SplashScreen from './screens/splash.screen';

const Splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}

const drawer = createDrawerNavigator({
  Splash: Splash
})

const AppNavigator = createAppContainer(drawer);

export default AppNavigator;