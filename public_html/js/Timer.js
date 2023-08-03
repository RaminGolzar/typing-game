/* global TypingControll */

const Timer = {
    /**
     * Hold the html element
     * 
     * @type type
     */
    elemTimerCounter : $('#timer-counter') ,
    
    /**
     * Hold the html element
     * 
     * @type type
     */
    elemTimerBar : $('#timer-bar') ,
    
    /**
     * This is the second counter
     * 
     * @type Number
     */
    secondCounter : 0 ,
    
    /**
     * This is the maximum time
     * 
     * @type Number
     */
    maxTime : 60 ,
    
    /**
     * This is a second, in thousandths of a second
     * 
     * @type Number
     */
    aSecond : 1000 ,
    
    /**
     * Hold the output of the scheluded work
     * 
     * @type type
     */
    outputScheduled : null ,
    
    /**
     * This is executeable method
     * 
     * @returns {undefined}
     */
    run : function () {
        this.outputScheduled = setInterval (function () {
            Timer.scheduledWork ();
        } , this.aSecond);
    } ,
    
    /**
     * This is scheduled works
     * 
     * @returns {undefined}
     */
    scheduledWork : function () {
        if (this.isTimeOut ()) {
            this.timeOutAction ();
        } else {
            this.noTimeOutAction ();
        }
    } ,
    
    /**
     * Return "true", if time has expired
     * 
     * @returns {Boolean}
     */
    isTimeOut : function () {
        return this.secondCounter < this.maxTime ? false : true;
    } ,
    
    /**
     * Stop the timer
     * 
     * @returns {undefined}
     */
    stop : function () {
        clearInterval (this.outputScheduled);
    } ,
    
    /**
     * Reset the timer
     * 
     * @returns {undefined}
     */
    reset : function () {
        this.stop ();
        
        this.secondCounter = 0;
        this.elemTimerCounter.text ('0');
        this.elemTimerBar.css ({width : '0px'});
    } ,
    
    /**
     * Things that should be done when the time is up
     * 
     * @returns {undefined}
     */
    timeOutAction : function () {
        this.stop ();
        
        if (! RedSign.isGameOver ()) {
            this.displayFinalMessage ();
        
            Mode.setStop();
        
            TypingControll.stopMoving();
        }
    } ,
    
    /**
     * Display the final message
     * 
     * @returns {undefined}
     */
    displayFinalMessage : function () {
        if (Level.isLastLevel ()) {
            End.showYouWin ();
        } else {
            End.showNextLevel ();
        }
    } ,
    
    /**
     * If the time has not expired, this action must be taken
     * 
     * @returns {undefined}
     */
    noTimeOutAction : function () {
        let incrementWidth = '+=1.66%';
        
        this.secondCounter++;
        this.elemTimerCounter.text (this.secondCounter);
        this.elemTimerBar.animate ({width : incrementWidth} , this.aSecond);
    } 
};
