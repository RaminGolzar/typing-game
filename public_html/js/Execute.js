$('body').keypress (function (keyEvent) {
    TypingControll.run (keyEvent);
});

$('#start').click(function() {
    $(this).hide ();
    
    Mode.setStart ();
    
    $('#text-block').show ();
    
    TypingControll.newTextBlock();
    
    Timer.run ();
});
