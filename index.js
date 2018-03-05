//the root component, the starting point of our application

//CLASS BASED COMPONENTS > to handle fetching data. More complex and capability. Handles data that might change.
//FUNCTIONAL COMPONENTS > Data goes in, JSX goes out. Just for presentational needs.


//1. Import libraries to help create components
import React from 'react'; //knows how a component should behave. knows how to make a bunch of components and making them work together
import {AppRegistry, View } from 'react-native'; //portal to the mobile device. knows how to take the output from a component and make it appear on a mobile device. Also provides default core components like images and text.
//We also need a VIEW TAG if we want to render additional children and wrap them around in a View tag
import Header from './src/components/header.js';

import AlbumList from './src/components/albumlist.js';


//2. Create a component
//write a function returning JSX
//component is a JS function that returns some amount of JSX
//JXS is a dialect of JavaScript that tells react or react native what content we want to show on the screen
//must import descruturing of TEXT
const App = () => {
  return (
    <View>
      <Header headerText={'Albums'}/>
      <AlbumList/>
    </View>
  );
};

//3. Render to the device
//AppRegistry is only used by the root. The top most component
//'albums_again' needs to be unique for each app!
AppRegistry.registerComponent('albums_again', () => App);
