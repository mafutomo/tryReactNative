import React from 'react';
import {View} from 'react-native';

//will this need to be class or func component? This is only showing content. so functional


const CardSection = (props) => {
  return (
    <View style = {styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export default CardSection;
