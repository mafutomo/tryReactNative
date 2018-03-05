import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './albumdetail.js';

//CLASS BASED COMPONENTS > to handle fetching data. More complex and capability. Handles data that might change. Make sure to add render method to return JSX. They have LIFE CYCLE METHODS.

//FUNCTIONAL COMPONENTS > Data goes in, JSX goes out. Just for presentational needs.

//'extends Component' says that we want to borrow functionality from base Component from react library
// make sure to import component on line 1

//use debugger; to debug and refresh, look at log statements

class AlbumList extends Component {
  //a plain js object available to class based components and respond to user-triggered events
  //PROPS - communicate parent to child component
  //STATE - for components internal record keeping. only use for class based components.
    state = {
      albums: []
    }

  //anytime component about to render, this componentWillMount method will automatically be executed
  async componentWillMount(){
    //MAKE SURE YOU'RE USING HTTPS
    const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await response.json()
    this.setState({albums:json})
    //why does this not work? fetch('https://rallycoding.herokuapp.com/api/music_albums')
   // .then(response => {
   //   let info = response.json()
   //   console.log(info)
   // })
 }

//to render all of the albums, then call it in the main render
//for performance, we also need to make sure that there are unique keys
//the key property must be unique and must make sure it is the same value across all re-renders. > usually use id...not name.
//pass album into the AlbumDetail component
 renderAlbums(){
   return this.state.albums.map( album => {
     return <AlbumDetail key={album.title}
            album={album}/>
   });
 }

  render(){
    return(
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList;
