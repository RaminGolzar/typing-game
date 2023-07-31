const Mode = {
    mode : 'start' ,
    
    setStartMode : function () {
        this.mode = 'start';
    } ,
    
    isStartMode : function () {
        return this.mode === 'start' ? true : false;
    } ,
    
    setTypingMode : function () {
        this.mode = 'typing';
    } ,
    
    isTypingMode : function () {
        return this.mode === 'typing' ? true : false;
    } ,
    
    setEndTimeMode : function () {
        this.mode = 'endTime';
    } ,
    
    isEndTimeMode : function () {
        return this.mode === 'endTime' ? true : false;
    } ,
    
    setTypedMode : function () {
        this.mode = 'typed';
    } ,
    
    isTypedMode : function () {
        return this.mode === 'typed' ? true : false;
    } ,
    
    setGameOverMode : function () {
        this.mode = 'gameOver';
    } ,
    
    isGameOverMode : function () {
        return this.mode === 'gameOver' ? true : false;
    } ,
    
    getMode : function () {
        return this.mode;
    } 
};