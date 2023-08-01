$('body').keypress (function (keyEvent) {
    TypingControll.run (keyEvent);
});

$('#start').click(function() {
    $(this).hide ();
    
    baseStartActions ();
});

$('#stop , #again').click(function() {
    resetGame();
    
    $('#start').show();
    
    baseStopActions ($(this));
});

$('#next').click(function() {
    baseStopActions ($(this));
    
    Level.goNext();
    
    Timer.reset();
    
    baseStartActions();
});
