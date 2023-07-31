const status = {
    gameFlow : 'stop',
    time : 0 ,
    endTime : false ,
    
    /**
     * Reset the all game status
     * 
     * @returns {undefined}
     */
    reset : function () {
        this.gameFlow = 'stop';
        this.time = 0;
    } ,
    
    /**
     * Set the gameFlow property
     * 
     * 
     * @param {string} status <p>Allowed: stop , play , pause</p>
     * @type type
     */
    setFlow : function (status) {
        if (status === 'stop' || status === 'play' || status === 'pause') {
            this.gameFlow = status;
        }
    } ,
    
    /**
     * Increment time property
     * 
     * @type type
     */
    timePlus : function () {
        this.time++;
    } 
};

/* todo: amaliate ruye char , word , mistake , ... as file
 * TypingControll.js be inja montaghel shavad.
 */