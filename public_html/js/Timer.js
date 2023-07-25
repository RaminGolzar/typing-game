const Timer = {
    hTimerCounter : $('#timer-counter') ,
    
    hTimerBar : $('#timer-bar') ,
    
    timerCounter : 0 ,
    
    maxTime : 60 ,
    
    secondKeeper : 1000 ,
    
    startTime : function () {
        let timer = setInterval (function () {
            Timer.scheduledWork ();
        } , this.secondKeeper);
    } ,
    
    scheduledWork : function () {
        if (! this.timeOverflow ()) {
            this.timerCounter++;
            this.hTimerCounter.text (this.timerCounter);
            this.hTimerBar.animate ({width : '+=10'} , this.secondKeeper);
        }
    } ,
    
    timeOverflow : function () {
        return this.timerCounter <= this.maxTime ? false : true;
    } ,
    
    run : function () {
        this.startTime ();
    } ,
    
    stop : function () {
        
    } ,
    
    reset : function () {
        
    } 
};

Timer.run ();