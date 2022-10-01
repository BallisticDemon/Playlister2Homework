import React from "react";
import EditSongModal from "./EditSongModal";


export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }
    

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length); //how do you get the item number using this statement
    }

    handleDoubleClick=(event)=>{
        let num = this.getItemNum()-1;
        let titleField= document.getElementById("Title");
        let artistField= document.getElementById("Artist");
        let youTubeIdField= document.getElementById("youTubeId");
        titleField.value=this.props.currentList.songs[num].title;
                artistField.value=this.props.currentList.songs[num].artist;
                youTubeIdField.value=this.props.currentList.songs[num].youTubeId;
        this.props.editSongCallback(num);
        
    }

     handleDeleteSong=()=>{
        let num = this.getItemNum()-1;
        this.props.deleteSongCallback(num);

     }

    
    

    render() {
        const { song, currentList, hideEditSongModal,SongEditIndex,EditSongCallback } = this.props; //this.props are the pieces of data and function pointers that are passed to a songCard 
        let num = this.getItemNum();
        //let youtube="https://www.youtube.com/watch?v="+song.youTubeId;
       // console.log("num: " + num);
        let itemClass = "playlister-song";
        if (this.state.draggedTo) {
            itemClass = "playlister-song-dragged-to";
        }
        return (
            
           
            <div
                id={'song-' + num}
                className={itemClass}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                draggable="true"
                onDoubleClick={this.handleDoubleClick}
                
                
            >
                

                {num}. <a href= {`https://www.youtube.com/watch?v=${song.youTubeId}`}>{song.title} by {song.artist}</a>

                <input
                        type="button"
                        id={"delete-Song-" + num}
                        className="list-card-button"
                        onClick={this.handleDeleteSong}
                        value={"X"} />
                
                
            </div>
            
            
        )
    }
}