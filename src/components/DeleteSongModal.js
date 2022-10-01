import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    // constructor(props){
    //     super(props)
    //     let title1=""
    //     let artist1=""
    //     if(this.props.canDeleteSong){
    //       title1= this.props.currentList.songs[this.props.SongDeleteIndex].title;
    //       artist1=this.props.currentList.songs[this.props.SongDeleteIndex].artist;
          
    //     }

    //     this.state={
    //         title: title1,
    //       artist: artist1
          
    //     }
        
    // }
    // }
    // constructor(){
    //     super(props)
    //     this.state={
            
    //     }
    // }
    render() {
        const{
            currentList, SongDeleteIndex,
                    hideDeleteSongModalCallback,
                    deleteSongCallback}=this.props;
                    let titleI = "";
                    let artistI="";
                   // console.log("extra"+SongDeleteIndex);
                  //  console.log(currentList);
                    if (currentList&&SongDeleteIndex&&SongDeleteIndex<currentList.songs.length) {
                        titleI = currentList.songs[SongDeleteIndex].title;
                        artistI=currentList.songs[SongDeleteIndex].artist;
                        
                    }
                    //console.log("Song Delete Index: "+SongDeleteIndex);
                    
        // if(currentList!==null){
        //    let song=currentList.songs[SongDeleteIndex];
        //    let name=song.title;
        // }
        // if(this.currentList===null){
        //     return (<div id="delete-song-modal"></div>)
        // }else{
        return (
            <div 
                class="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-song-root'>
                        <div class="modal-north">
                            Delete Song?
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Are you sure you wish to permanently delete {titleI} by {artistI}?
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-list-confirm-button" 
                                class="modal-button" 
                                onClick={deleteSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-list-cancel-button" 
                                class="modal-button" 
                                onClick={hideDeleteSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
          );
        //}
    }
}