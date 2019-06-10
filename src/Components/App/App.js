import React from 'react';
import './App.css';

import SearchResults from '../SearchResults/SearchResults'
import PlayList from '../PlayList/PlayList'
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      searchResults:[{
        name:'ionion',
        artist:'lonlon',
        album:'chion',
        id:'12456'        
      }],
      playlistName:'Name of the playlist',
      playlistTracks:[{
        name:'ionion',
        artist:'lonlon',
        album:'chion',
        id:'12456'        
      }]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
  };

  addTrack(track){
    let trackos = this.state.playListTracks;
    if (trackos.find(searchedTrack=>
      searchedTrack.id === track.id
    )) {
      return;
    } else {
      trackos.push(track)
      this.setState({playListTracks:trackos})
    }
  }

  removeTrack(track){
    let trackos = this.state.playlistTracks;
    trackos = trackos.filter(searchedTrack=> track.id !== trackos.id);
    this.setState({playlistTracks:trackos})
  }

  updatePlayListName(name){
    this.setState({playlistName:name})
  }

  savePlayList(){
    let trackURIs = ["uri1","uri2"]
  }

  search(term){
    console.log(term)
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
            <PlayList onSave={this.savePlayList} onNameChange={this.updatePlayListName} onremove={this.removeTrack} name={this.state.playlistName} tracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
