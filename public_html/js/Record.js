const Record = {
    charCounter : 0 ,
        
    wordCounter : 0 ,
        
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
                this.incrementWordCounter ();
            }
        } else {
            if (this.spacebarValidation (keyCode)) {
                this.incrementWordCounter ();
            }
        }
    } ,
        
    /**
     * Increment the word count counter
     * 
     * @returns {undefined}
     */
    incrementWordCounter : function () {
        this.wordCounter++;
        $('#word-counter').text (this.wordCounter);
    } ,
        
    /**
     * Spacebar validation
     * 
     * Returns "true" if the key is valid
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