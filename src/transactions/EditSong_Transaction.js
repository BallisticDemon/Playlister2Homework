import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, EditIndex, previousState) {
        super();
        this.app = initApp;
        this.editingIndex=EditIndex;
    }

    doTransaction() {
        this.app.editSong(this.editingIndex);
    }
    
    undoTransaction() {
        this.app.editSong(this.newSongIndex, this.oldSongIndex);
    }
}