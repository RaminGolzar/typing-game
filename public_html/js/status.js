const status = {
    gameFlow : 'stop',
    level : 1 ,
    maxLevel : 5 ,
    word : 0 ,
    char : 0 ,
    mistake : 0 ,
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
        this.word = 0;
        this.char = 0;
        this.mistake = 0;
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
    } ,
    
    /**
     * Increment word property
     * 
     * @type type
     */
    wordPlus : function () {
        this.word++;
    } ,
    
    /**
     * Increment char property
     * 
     * @type type
     */
    charPlus : function () {
        this.char++;
    } ,
    
    /**
     * Increment mistake property
     * 
     * @type type
     */
    mistakePlus : function () {
        this.mistake++;
    }
};

/* todo: amaliate ruye char , word , mistake , ... as file
 * TypingControll.js be inja montaghel shavad.
 */