import React from 'react';
import {TrackList} from '../Tracklist/Tracklist'

export class Playlist extends React.Component {
    render (){
        return (
        <div className="Playlist">
            <input value={"New Playlist"}/>
            <TrackList playlistTracks={this.props.playlistTracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
      )
    }
}