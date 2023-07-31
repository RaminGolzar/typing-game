const RedSign = {
    /**
     * Keeps maximim red sign
     * 
     * @type Number
     */
    maxRedSign : 3 ,
    
    /**
     * Keep number of the red sign
     * 
     * @type Number
     */
    redSignCounter : 0 ,

    /**
     * Register a red sign
     * 
     * @returns {undefined}
     */
    register : function () {
        this.redSignIncrease();
        
        this.toRed()
    } ,

    /**
     * Adds to the number of red sign
     * 
     * @returns {undefined}
     */
    redSignIncrease : function () {
        this.redSignCounter++;
    } ,

    /**
     * Return "true", if the red sign has overflowed
     * 
     * @returns {Boolean}
     */
    isGameOver : function () {
        return this.redSignCounter < this.maxRedSign ? false : true;
    } ,

    /**
     * Set a style for a red sign
     * 
     * @returns {undefined}
     */
    toRed : function () {
        $('#red-sign-' + this.redSignCounter)
            .removeClass ('w3-text-white')
            .addClass ('w3-text-red');
    } ,

    /**
     * Reset the red signs
     * 
     * @returns {undefined}
     */
    reset : function () {
        this.redSignCounter = 0;
        
        $('red-sign-1 , red-sign-2 , red-sign-3')
            .removeClass ('w3-text-red')
            .addClass ('w3-text-white');
    } 
};