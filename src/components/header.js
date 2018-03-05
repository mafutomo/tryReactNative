import React from 'react';
import { Text, View } from 'react-native';

const Header = ({headerText}) => {
  //descructure styles to reference our style object below. Then we'll put in the style prop
  const { textStyle, viewStyle } = styles;

  return (
    <View style = {viewStyle}>
      <Text style = {textStyle}>{headerText}</Text>
    </View>
  )
};

//we place all of our styles in the component file. we'll make a JS object called styles.
//use camel case
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
};

//make the component available to other files in our project
export default Header;
