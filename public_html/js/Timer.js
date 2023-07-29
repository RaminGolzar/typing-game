/* global TypingControll */

const Timer = {
    /**
     * Hold the html element
     * 
     * @type type
     */
    hTimerCounter : $('#timer-counter') ,
    
    /**
     * 
     * @type type
     */
    hTimerBar : $('#timer-bar') ,
    
    timerCounter : 0 ,
    
    maxTime : 60 ,
    
    secondKeeper : 100 ,
    
    timerInself : null ,
    
    run : function () {
        this.timerInself = setInterval (function () {
            Timer.scheduledWork ();
        } , this.secondKeeper);
    } ,
    
    scheduledWork : function () {
        let incrementWidth = '+=1.66%';
        
        if (this.timerOverflow ()) {
            this.timeOutAction ();
        } else {
            this.timerCounter++;
            this.hTimerCounter.text (this.timerCounter);
            this.hTimerBar.animate ({width : incrementWidth} , this.secondKeeper);
        }
    } ,
    
    timerOverflow : function () {
        return this.timerCounter < this.maxTime ? false : true;
    } ,
    
    stop : function () {
        clearInterval (this.timerInself);
    } ,
    
    reset : function () {
        this.stop ();
        
        this.timerCounter = 0;
        this.hTimerCounter.text ('0');
        this.hTimerBar.css ({width : '0px'});
    } ,
    
    timeOutAction : function () {
        this.stop();
        
        if (TypingControll.isGameOver ()) {
            alert ('{ Ok }');
        } else {
            alert ('{ Error }');
        }


        if (status.isLastLevel ()) {
            End.showYouWin ();
        } else {
            End.showNextLevel ();
        }
    } 
};

Timer.run ();
