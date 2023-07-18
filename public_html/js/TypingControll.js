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
        
        typingStartTime : 0 ,
        
        typingTimeout : 7000 ,
        
        /**
         * Generate lorem ipsum
         */
        genLorem : function () {
            let loremIpsum = lorem.genLorem(status.level);
            
            this.textBlockLength = loremIpsum.length;
            
            this.currentCharIndex = 0;
            
            return loremIpsum;
        } ,
        
        keyPress : function () {
            if (this.textBlockState === 'start' || this.textBlockState === 'endTime' || this.textBlockState === 'typed') {
                this.newTextBlock ();
            } else { /* the state is typing */
                if (this.checkTypingTimeout()) {
                    this.STBS ('endTime');
                    this.newTextBlock();
                } else {
                    this.typing();
                }

            }
        } ,
        
        /**
         * Generate a new text block
         * 
         * @returns {undefined}
         */
        newTextBlock : function () {
            
//            this.textBlock.children().eq(1).addClass ('not-typed');
            
            this.STBS ('typing');
            
            this.setTypingStartTime ();
            
            this.textBlock.stop()
                .css ({top : '0px'})
                .html (this.genLorem())
                /* ToDo: replace 7000 with a variable */
                .animate ({top : '+=210'}, 7000,function(){
                    this.textBlock.stop();
                    
                    /* ToDo: set a red sign */
                });
                
                
        } ,
        
        /**
         * STBS stands for "Set Text Block State"
         * 
         * @param {string} state
         * @returns {TypingControllL#1.TypingControll.STBS}
         */
        STBS : function (state) {
            if (state === 'start' || state === 'typing' || state === 'typed' || state === 'endTime') {
                this.textBlockState = state;
            }
        } ,
        
        /**
         * Set typing start time in second
         * 
         * @returns {undefined}
         */
        setTypingStartTime : function () {
            let currentTime = new Date();
            
            this.typingStartTimeSecond = currentTime.getTime();
        } ,
        
        /**
         * Return true, if time has expired
         * 
         * @returns {Boolean}
         */
        checkTypingTimeout : function () {
            let currentTime = new Date();
            
            let timeOut = this.typingStartTimeSecond + this.typingTimeout;
            
            if (timeOut < currentTime.getTime()) {
                return true;
            } else {
                return false;
            }
        } ,
        
        textBlockLength : 0 ,
        
        currentCharIndex : null ,
        
        typing : function () {
            alert (this.textBlockLength);
        } ,
        
        scrollCharacter : function () {
        
    } ,
    };
    
//    TypingControll.keyPress();
    
    $('body').keypress(function() {
        TypingControll.keyPress ();
    });
});

