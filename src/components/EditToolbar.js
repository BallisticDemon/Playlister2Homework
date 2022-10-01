import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const { canAddSong, canUndo, canRedo, canClose, 
                undoCallback, redoCallback, closeCallback, appendSongCallback} = this.props;
        let addSongClass = "playlister-button";
    
        let undoClass = "playlister-button";
        let redoClass = "playlister-button";
        let closeClass = "playlister-button";
        if (!canAddSong||!canClose){ 
            addSongClass += " disabled";
            addSongClass+= " playlister-button-disabled";
        }
        if (!canUndo||!canClose){
            undoClass += " disabled";
            undoClass+= " playlister-button-disabled";
        }

        if (!canRedo||!canClose){ 
            redoClass += " disabled";
            redoClass += " playlister-button-disabled";
       }

        if (!canClose){

        closeClass += " disabled";
        closeClass +=  " playlister-button-disabled";
        }
        // if (!(canAddSong)) addSongClass.classList.remove("") += " disabled";
        // if !(canUndo) undoClass += " disabled";
        // if !(canRedo) redoClass += " disabled";
        // if !(canClose) closeClass += " disabled";
        return (
            <div id="edit-toolbar">
            <input 
                type="button" 
                id='add-song-button' 
                value="+" 
                className={addSongClass}

                onClick={appendSongCallback}
            />
            <input 
                type="button" 
                id='undo-button' 
                value="⟲" 
                className={undoClass} 
                onClick={undoCallback}
            />
            <input 
                type="button" 
                id='redo-button' 
                value="⟳" 
                className={redoClass} 
                onClick={redoCallback}
            />
            <input 
                type="button" 
                id='close-button' 
                value="&#x2715;" 
                className={closeClass} 
                onClick={closeCallback}
            />
        </div>
        )
    }
}