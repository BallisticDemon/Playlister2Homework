import React, { Component } from 'react';

export default class EditSongModal extends Component {
    constructor(props){
        super(props)
        let title1=""
        let artist1=""
        let youTubeId1=""
        console.log(this.props.currentList)
        console.log(this.props.SongEditIndex)
        if(this.props.currentList&& this.props.SongEditIndex&&this.props.SongEditIndex<this.props.currentList.songs.length){
            //this.props.canEditSong&&this.props.SongEditIndex&&this.props.SongEditIndex<this.props.currentList.songs.length){
        
                // this.state={
                //     title: title1,
                //   artist: artist1,
                //   youTubeId: youTubeId1
                  
                // }
          title1= this.props.currentList.songs[this.props.SongEditIndex].title;
          //console.log(title1);
          artist1=this.props.currentList.songs[this.props.SongEditIndex].artist;
          //console.log(artist1);
          youTubeId1=this.props.currentList.songs[this.props.SongEditIndex].youTubeId;
          //console.log(youTubeId1);
          //console.log("been here")
          
        }

        // this.infoState={
        //     title1:"",
        //     artist1:"",
        //     youTubeId1:""
        // }
        this.state={
            title: title1,
          artist: artist1,
          youTubeId: youTubeId1
          
        }
        
        

    }
    //  componentDidUpdate(prevProps ){
    //     if(prevProps.songEditIndex!==this.props.SongEditIndex){
    //         if(this.props.currentList!==null){
    //             if(this.props.SongEditIndex!==null){
    //             let song= this.props.currentList.songs[this.props.SongEditIndex]; 
    //             this.setState(prevState => ({
    //                 title: song.title,
    //                 artist: song.artist,
    //                 youTubeId: song.youTubeId
    //             }))
    //             }
    //         }
    //     }
    // }
    // handleDoubleClick=(event)=>{
    //     if(event.detail===2){
    //         this.setState({
    //             editActive: !this.state.editActive
    //         });
    //     }
    // }
    handleOnChangeTitle=(event, titleN)=>{
        console.log(event.target.value)
       if(event.target.value!==titleN){
        
          this.setState({title: event.target.value})
       }else{
          this.setState({title: titleN})
       }
       //this.set
       console.log(this.state.title)
        
    }
    handleOnChangeArtist=(event, artistN)=>{
       
        if(event.target.value!==artistN){
            this.setState({artist: event.target.value})
         }else{
            this.setState({artist: artistN})
         }
       
    }
    handleOnChangeYouTubeId=(event, youTubeIdN)=>{

        
        if(event.target.value!==youTubeIdN){
            this.setState({youTubeId: event.target.value})
         }else{
            this.setState({youtubeId: youTubeIdN})
         }
        
    }
    handleOnConfirm=()=>{
       console.log(this.state.youTubeId);

    //    if(this.state.title===""){
    //     this.setState({title: titleI})
    //    }
    //    this.setState({artist: artistI})
    //    this.setState({youtubeId: youTubeIdI})
       this.props.EditSongCallback(this.state.title, this.state.artist, this.state.youTubeId)
       

    }
    // handleSetup=(titleI, artistI, youTubeIdI)=>{

    //     this.setState({title: titleI})
    //     this.setState({artist: artistI})
    //     this.setState({youTubeId: youTubeIdI})
    // }

    //save the 
    render() {
        const { currentList, SongEditIndex, hideEditSongModalCallback, EditSongCallback } = this.props;
       //const {currentList, SongEditIndex, hideEditSongModalCallback, EditSongCallback}=this.props;
       let titleI="";
       let artistI="";
       let youTubeIdI="";
        if (currentList&&SongEditIndex&&SongEditIndex<currentList.songs.length){
            titleI=currentList.songs[SongEditIndex].title
            artistI=currentList.songs[SongEditIndex].artist
            youTubeIdI=currentList.songs[SongEditIndex].youTubeId
            // this.handleSetup(titleI, artistI,youTubeIdI)
            // this.setState(prevState => ({
            //     title: titleI,
            //     artist: artistI,
            //     youTubeId: youTubeIdI
            // }));
            // this.state.title=titleI;
            // this.state.artist=artistI;
            // this.state.youTubeId=youTubeIdI;
            console.log(this.state.title)
            
            console.log("been here")
            //console.log(titleI)
           // artistI=currentList.songs[SongEditInd]
        }
    //    console.log(titleI);
    //    if(currentList===null){
    //     return  (<div>id="edit-song-modal"</div>)
    //    }else{
       return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                
                            <label for="Title">Title:</label>
                            <input type="text" id="Title" name="Title" defaultValue={titleI} 
                             onChange={event=>this.handleOnChangeTitle(event, titleI)}
                            />
                        
                           {/* {event => handleChange(event, 'hello', 'world')} */}
                            <label for="Artist">Artist:</label>
                            <input type="text" id="Artist" name="Artist" defaultValue={artistI}
                             onChange={event=>this.handleOnChangeArtist(event, artistI)}
                            />
                        
                            <label for="youTubeId">youTubeId:</label>
                            <input type="text" id="youTubeId" name="youTubeId" defaultValue={youTubeIdI}
                             onChange={event=>this.handleOnChangeYouTubeId(event, youTubeIdI)}
                            />




                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-list-confirm-button" 
                                class="modal-button" 
        
                        
                                onClick={this.handleOnConfirm}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-list-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
       }
    }
