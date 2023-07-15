$(document).ready (function () {
//    $('body').keyup (function(e) {
//        $('title').text(e.keyCode);
//        let ss = 'abc';
//        let subtractAsciiFromUtf_16 = 32;
//        $('title').text(ss.charCodeAt(2) - 32);
//    });
    
    const TypingControll = {
        subtractAsciiFromUtf_16 : 32 ,
        gameBox : $('#game-box') ,
        textBlock : $('#text-block') ,
        redSign : 0 ,
        
        /**
         * Allowed: start , typing , typed , endTime
         */
        textBlockState : 'start' , 
        textBlockStartTime : 0 ,
        
        /**
         * Generate lorem ipsum
         */
        genLorem : function () {
            /* ToDo: uncomment belove line & delete next line */
//            lorem.genLorem(status.level);
            return lorem.genLorem(3);
        } ,
        
        keyPress : function () {
            if (this.textBlockState === 'start' || this.textBlockState === 'endTime' || this.textBlockState === 'typed') {
                this.newTextBlock ();
            }
        } ,
        
        /**
         * Generate a new text block
         * 
         * @returns {undefined}
         */
        newTextBlock : function () {
            this.textBlock.stop()
//                .css ({top : '0px'})
//                .html (this.genLorem())
                .animate ({top : '+=210'}, 7000,function(){
                    this.stopTextBlock ();
                    /* ToDo: set a red sign */
                });
        } ,
        
        stopTextBlock : function () {
            this.textBlock.stop();
        } 
    };
    
    TypingControll.keyPress();
    
    $('body').click(function() {
        TypingControll.newTextBlock();
    });
});

