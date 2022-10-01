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
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, DeleteIndex, DeletedSong) {
        super();
        this.app = initApp;
        this.deletionIndex=DeleteIndex;
        this.deletionSong= DeletedSong;
        
    }

    doTransaction() {
        this.app.deleteSong();
    }
    
    undoTransaction() {
        this.app.undoDeleteSong(this.deletionIndex, this.deletionSong);
    }
}