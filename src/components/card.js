import React from 'react';
import { View } from 'react-native';

//if we pass one component into another it will show up in the parent as props.children ... in this case it's Text
const Card = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    //thin boarder width of 1px
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset:{
        //shadowing to the bottom but not the sides
        width: 0, height: 2
      },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
}

export default Card;
