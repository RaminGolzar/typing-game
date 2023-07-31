const Mode = {
    mode : 'start' ,
    
    setStartMode : function () {
        this.mode = 'start';
    } ,
    
    isStart : function () {
        return this.mode === 'start' ? true : false;
    } ,
    
    setTyping : function () {
        this.mode = 'typing';
    } ,
    
    isTyping : function () {
        return this.mode === 'typing' ? true : false;
    } ,
    
    setEndTime : function () {
        this.mode = 'endTime';
    } ,
    
    isEndTime : function () {
        return this.mode === 'endTime' ? true : false;
    } ,
    
    setTyped : function () {
        this.mode = 'typed';
    } ,
    
    isTyped : function () {
        return this.mode === 'typed' ? true : false;
    } ,
    
    setGameOver : function () {
        this.mode = 'gameOver';
    } ,
    
    isGameOver : function () {
        return this.mode === 'gameOver' ? true : false;
    } 
};