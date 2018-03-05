import React from 'react';
import {Text} from 'react-native';
import Card from './card.js';
import CardSection from './cardsection.js';

//do we use a class component or functional?
//this is only for presentation
//we don't need a lifecycle method and do not need access to state

const AlbumDetail = (props) => {
  return(
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  )
}

export default AlbumDetail;
