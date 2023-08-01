/* global Mode, Timer */

const ActionsEvents = {
    /**
     * Basic actions of start event
     * 
     * @returns {undefined}
     */
    baseStart : function () {
        Mode.setStart ();
    
        $('#text-block').show ();

        TypingControll.newTextBlock();

        Timer.run ();
    } ,
    
    /**
     * The basic actions of stop event
     * 
     * @param {called_event} eventObject
     * @returns {undefined}
     */
    baseStop : function (eventObject) {
        Mode.setStop();
    
        $('#text-block').hide();

        eventObject.parent().hide();
    } ,
    
    /**
     * Reset the game statistics
     * 
     * @returns {undefined}
     */
    resetGame : function () {
        Level.reset();
    
        RedSign.reset();

        Timer.reset();

        Record.reset();
    } 
};