const ActionsEvents = {
    baseStart : function () {
        Mode.setStart ();
    
        $('#text-block').show ();

        TypingControll.newTextBlock();

        Timer.run ();
    } ,
    
    baseStop : function (eventObject) {
        Mode.setStop();
    
        $('#text-block').hide();

        eventObject.parent().hide();
    } ,
    
    resetGame : function () {
        Level.reset();
    
        RedSign.reset();

        Timer.reset();

        Record.reset();
    } ,
};