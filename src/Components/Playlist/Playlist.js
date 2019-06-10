import React from 'react';
import './PlayList.css'
import TrackList from '../TrackList/TrackList'

class PlayList extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange=this.handleNameChange.bind(this);
    }
    handleNameChange(event){
        this.props.onNameChange(event.target.value)
    }
    render () {
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} value="New Playlist"/>
                <TrackList isRemoval='true' tracks={this.props.tracks}/>
                <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default PlayList;