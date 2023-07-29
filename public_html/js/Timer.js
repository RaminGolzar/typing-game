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
    aSecond : 100 ,
    
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
        status.endTime = false;
        
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
     * Unset the timer
     * 
     * @returns {undefined}
     */
    unset : function () {
        clearInterval (this.outputScheduled);
    } ,
    
    /**
     * Reset the timer
     * 
     * @returns {undefined}
     */
    reset : function () {
        this.unset ();
        
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
        this.unset ();
        
        if (TypingControll.isGameOver ()) {
            return;
        }
        
        status.endTime = true;
        
        this.displayFinalMessage ();
    } ,
    
    /**
     * Display the final message
     * 
     * @returns {undefined}
     */
    displayFinalMessage : function () {
        if (status.isLastLevel ()) {
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

Timer.run ();
