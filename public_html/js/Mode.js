const Mode = {
    mode : 'start' ,
    
    setStartMode : function () {
        this.mode = 'start';
    } ,
    
    setTypingMode : function () {
        this.mode = 'typing';
    } ,
    
    setEndTimeMode : function () {
        this.mode = 'endTime';
    } ,
    
    setTypedMode : function () {
        this.mode = 'typed';
    } ,
    
    setGameOverMode : function () {
        this.mode = 'gameOver';
    } ,
};