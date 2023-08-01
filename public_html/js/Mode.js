const Mode = {
    /**
     * Holds the game mode
     * 
     * @type String
     */
    mode : 'stop' ,
    
    /**
     * Setting "start" mode
     * 
     * @returns {undefined}
     */
    setStart : function () {
        this.mode = 'start';
    } ,
    
    /**
     * Is mode equal to "start"?
     * 
     * @returns {Boolean}
     */
    isStart : function () {
        return this.mode === 'start' ? true : false;
    } ,
    
    /**
     * Setting "typing" mode
     * 
     * @returns {undefined}
     */
    setTyping : function () {
        this.mode = 'typing';
    } ,
    
    /**
     * Is mode equal to "typing"?
     * 
     * @returns {Boolean}
     */
    isTyping : function () {
        return this.mode === 'typing' ? true : false;
    } ,
    
    /**
     * Setting "endTime" mode
     * 
     * @returns {undefined}
     */
    setEndTime : function () {
        this.mode = 'endTime';
    } ,
    
    /**
     * Is mode equal to "endTime"?
     * 
     * @returns {Boolean}
     */
    isEndTime : function () {
        return this.mode === 'endTime' ? true : false;
    } ,
    
    /**
     * Setting "typed" mode
     * 
     * @returns {undefined}
     */
    setTyped : function () {
        this.mode = 'typed';
    } ,
    
    /**
     * Is mode equal to "typed"?
     * 
     * @returns {Boolean}
     */
    isTyped : function () {
        return this.mode === 'typed' ? true : false;
    } ,
    
    /**
     * Setting "gameOver" mode
     * 
     * @returns {undefined}
     */
    setGameOver : function () {
        this.mode = 'gameOver';
    } ,
    
    /**
     * Is mode equal to "gameOver"?
     * 
     * @returns {Boolean}
     */
    isGameOver : function () {
        return this.mode === 'gameOver' ? true : false;
    } ,
    
    /**
     * Setting "stop" mode
     * 
     * @returns {undefined}
     */
    setStop : function () {
        this.mode = 'stop';
    } ,
    
    /**
     * Is mode equal to "stop"?
     * 
     * @returns {Boolean}
     */
    isStop : function () {
        return this.mode === 'stop' ? true : false;
    } 
};