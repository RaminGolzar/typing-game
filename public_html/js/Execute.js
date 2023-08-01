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

function resetGame () {
    Level.reset();
    
    RedSign.reset();
    
    Timer.reset();
    
    Record.reset();
}

function baseStopActions (eventObject) {
    Mode.setStop();
    
    $('#text-block').hide();
    
    eventObject.parent().hide();
}

function baseStartActions () {
    Mode.setStart ();
    
    $('#text-block').show ();
    
    TypingControll.newTextBlock();
    
    Timer.run ();
}

const Execute  = {
    
};