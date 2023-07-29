const status = {
    gameFlow : 'stop',
    level : 1 ,
    maxLevel : 5 ,
    time : 0 ,
    endTime : false ,
    
    /**
     * Reset the all game status
     * 
     * @returns {undefined}
     */
    reset : function () {
        this.gameFlow = 'stop';
        this.level = 1;
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
     * Increment level property
     * 
     * @type type
     */
    levelPlus : function () {
        if (! this.isLastLevel ()) {
            this.level++;
        }
    } ,
    
    /**
     * Is it the last level? "true" means the last level
     * 
     * @returns {Boolean}
     */
    isLastLevel : function () {
        return this.level < this.maxLevel ? false : true;
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