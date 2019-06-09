import React from 'react';
import logo from './logo.svg';
import './App.css';

import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      searchResults : [
        {name:'name'},
        {artist:'artist'},
        {album:'album'},
        {id:'id'}
      ],
      playlistName : 'playlistname',
      playlistTracks : [
        {name:''},
        {artist:''},
        {album:''},
        {id:''}
      ]
    }
    this.addTrack = this.addTrack.bind(this)
  }

  addTrack(track){
    if (this.state.searchResults.find(savedTrack => savedTrack.id === track.id)){
      return;
    } else {
      this.setState({playlistTracks:playlistTracks.push(track)})
    }
  }

  render()
  {    
    return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
  )}
}

export default App;
