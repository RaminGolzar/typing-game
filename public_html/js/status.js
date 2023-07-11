const status = {
    gameFlow : 'stop',
    level : 1 ,
    word : 0 ,
    char : 0 ,
    mistake : 0 ,
    time : 0 ,
    
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
    set setFlow (status) {
        if (status === 'stop' || status === 'play' || status === 'pause') {
            this.gameFlow = status;
        }
    } ,
    
    /**
     * Increment level property
     * 
     * @type type
     */
    set levelPlus () {
        this.level++;
    } ,
    
    /**
     * Increment time property
     * 
     * @type type
     */
    set timePlus () {
        this.time++;
    } ,
    
    /**
     * Increment word property
     * 
     * @type type
     */
    set wordPlus () {
        this.word++;
    } ,
    
    /**
     * Increment char property
     * 
     * @type type
     */
    set charPlus () {
        this.char++;
    } ,
    
    /**
     * Increment mistake property
     * 
     * @type type
     */
    set mistakePlus () {
        this.mistake++;
    }
};