import SongCard from './SongCard.js';
import React from "react";

export default class PlaylistCards extends React.Component {
    render() {
        const { currentList, 
                moveSongCallback, editSongCallback, deleteSongCallback, hideEditSongModal, SongEditIndex, EditSongCallback } = this.props;
        console.log(currentList)
        if (currentList === null) {
            return (
                <div id="playlist-cards"></div>
            )
        }
        else {
            return (
                <div id="playlist-cards">
                    {
                        currentList.songs.map((song, index) => (
                            <SongCard
                                id={'playlist-song-' + (index+1)}
                                key={'playlist-song-' + (index+1)}
                                song={song}
                                number={index}
                                moveCallback={moveSongCallback}
                                editSongCallback={editSongCallback}
                                currentList={currentList}
                                deleteSongCallback={deleteSongCallback}
                                hideEditSongModal={hideEditSongModal}
                                SongEditIndex={SongEditIndex}
                                EditSongCallback={EditSongCallback}
                            />
                        ))
                    }
                </div>
            )
        }
    }
}