const Record = {
    /**
     * keeps the number of characters
     * 
     * @type Number
     */
    charCounter : 0 ,
     
    /**
     * Keeps the number of words
     * 
     * @type Number
     */
    wordCounter : 0 ,
    
    /**
     * Keeps the number of spelling mistake
     * 
     * @type Number
     */
    mistakeCounter : 0 ,
    
    /**
     * Add one to the number of char counter
     * 
     * @returns {undefined}
     */
    addChar : function () {
        this.charCounter++;
        $('#char-counter').text (this.charCounter);
    } ,
    
    /**
     * Add one to the number of word counter
     * 
     * @param {boolean} directRecord
     * @param {boolean} checkTypingTimeout
     * @param {string} textBlockState
     * @param {string} keyCode
     * @returns {undefined}
     */
    addWord : function 
    (
        directRecord = false , 
        checkTypingTimeout = null , 
        textBlockState = null , 
        keyCode = null
    ) {
        if (directRecord) {
            if (!checkTypingTimeout && textBlockState !== 'start') {
                this.wordIncrease ();
            }
        } else {
            if (this.spacebarValidation (keyCode)) {
                this.wordIncrease ();
            }
        }
    } ,
        
    /**
     * Increment the word count counter
     * 
     * @returns {undefined}
     */
    wordIncrease : function () {
        this.wordCounter++;
        $('#word-counter').text (this.wordCounter);
    } ,
        
    /**
     * Spacebar validation
     * 
     * Returns "true" if the space key is pressed
     * 
     * @returns {Boolean}
     */
    spacebarValidation : function (keyCode) {
        let spaceKeyCode = 32;

        return keyCode == spaceKeyCode ? true : false;
    } ,
    
    /**
     * Add one to the number of the mistake counter
     * 
     * @returns {undefined}
     */
    addMistake : function () {
        this.mistakeCounter++;
        $('#mistake-counter').text (this.mistakeCounter);
    } ,
    
    /**
     * Reset the all counters
     * 
     * @returns {undefined}
     */
    reset : function () {
        this.wordCounter = 0;
        this.charCounter = 0;
        this.mistakeCounter = 0;

        $('#word-counter').text (this.wordCounter);
        $('#char-counter').text (this.charCounter);
        $('#mistake-counter').text (this.mistakeCounter);
    } 
};