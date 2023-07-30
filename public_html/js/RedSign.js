const RedSign = {
    /**
     * Keep number of the red sign
     * 
     * @type Number
     */
    redSignCounter : 0 ,

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
    redSignAnimation : function () {
        $('#red-sign-' + this.redSignCounter)
            .removeClass ('w3-text-white')
            .addClass ('w3-text-red');
    } ,

    /**
     * Keeps maximim red sign
     * 
     * @type Number
     */
    maxRedSign : 3 ,

    /**
     * Reset the red signs
     * 
     * @returns {undefined}
     */
    reset : function () {
        this.redSignCounter = 0;
        
        $('red-sign-1 , red-sign-2 , red-sign-3').removeClass ('w3-text-red');

        $('red-sign-1 , red-sign-2 , red-sign-3').addClass ('w3-text-white');
    } 
};