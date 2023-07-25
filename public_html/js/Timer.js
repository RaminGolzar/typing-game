const Timer = {
    timeCounter : 0 ,
    
    maxTime : 60 ,
    
    secondKeeper : 1000 ,
    
    startTime : function () {
        let timer = setInterval (function () {
            this.scheduledWork ();
        } , this.secondKeeper);
    } ,
    
    scheduledWork : function () {
        if (! this.timeOverflow()) {
            this.timeCounter++;
            
        }
    } ,
    
    timeOverflow : function () {
        return this.timeCounter <= this.maxTime ? false : true;
    } ,
    
    run : function () {
        
    } ,
    
    stop : function () {
        
    } ,
    
    reset : function () {
        
    } 
};