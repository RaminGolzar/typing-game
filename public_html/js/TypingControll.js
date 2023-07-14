$(document).ready (function () {
//    $('body').keyup (function(e) {
//        $('title').text(e.keyCode);
//        let ss = 'abc';
//        let subtractAsciiFromUtf_16 = 32;
//        $('title').text(ss.charCodeAt(2) - 32);
//    });
    
    const TypingControll = {
        subtractAsciiFromUtf_16 : 32 ,
        gameBox : document.getElementById ('game-box'); ,
        textBlock : document.getElementById ('text-block'); ,
        redSign : 0 ,
        
        /**
         * Generate lorem ipsum
         */
        genLorem : function () {
            lorem.genLorem(status.level);
        } ,
        
        keyPress : function () {
            window.alert($('text-block').next().text());
            window.alert($('text-block').next().text());
            window.alert($('text-block').next().text());
        } ,
    };
});

typingControll.keyPress();