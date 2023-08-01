$('body').keypress (function (keyEvent) {
    TypingControll.run (keyEvent);
});

$('#start').click(function() {
    $(this).hide ();
    
    ActionsEvents.baseStart ();
});

$('#stop , #again').click(function() {
    ActionsEvents.resetGame();
    
    $('#start').show();
    
    ActionsEvents.baseStop ($(this));
});

$('#next').click(function() {
    ActionsEvents.baseStop ($(this));
    
    Level.goNext();
    
    Timer.reset();
    
    ActionsEvents.baseStart ();
});
