$('body').keypress (function (keyEvent) {
    TypingControll.run (keyEvent);
});

$('#start').click(function() {
    $(this).hide ();
    
    ActionsEvents.baseStartActions ();
});

$('#stop , #again').click(function() {
    ActionsEvents.resetGame();
    
    $('#start').show();
    
    ActionsEvents.baseStopActions ($(this));
});

$('#next').click(function() {
    ActionsEvents.baseStopActions ($(this));
    
    Level.goNext();
    
    Timer.reset();
    
    ActionsEvents.baseStartActions();
});
