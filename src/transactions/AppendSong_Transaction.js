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
export default class AppendSong_Transaction extends jsTPS_Transaction {
    constructor(initApp) {
        super();
        this.app = initApp;
        
    }

    doTransaction() {
        this.app.pushOnSong();
    }
    
    undoTransaction() {
        this.app.popOffSong(this.newSongIndex, this.oldSongIndex);
    }
}