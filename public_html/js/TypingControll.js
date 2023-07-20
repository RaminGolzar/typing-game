/* global embed, lorem */

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
            
            loremIpsum = embed.run (loremIpsum);
            
            return loremIpsum;
        } ,
        
        keyPress : function (keyEvent) {
            if (this.textBlockState === 'start' || this.textBlockState === 'endTime') {
                this.newTextBlock ();
            } else { /* the state is typing */
                if (this.checkTypingTimeout()) {
                    this.STBS ('endTime');
                    this.newTextBlock();
                } // else {
                    /* ToDo: delete this else block */
                // }

            }
            this.typing (keyEvent);
        } ,
        
        /**
         * Generate a new text block
         * 
         * @returns {undefined}
         */
        newTextBlock : function () {
            this.STBS ('typing');
            
            this.setTypingStartTime ();
            
            this.resetScrollChar ();
            
            this.textBlock.stop()
                .css ({top : '0px'})
                .html (this.genLorem())
                /* ToDo: replace 7000 with a variable */
                .animate ({top : '+=210'}, 7000,function(){
                    this.textBlock.stop();
                    
                    /* ToDo: set a red sign */
                });
            
            /* set default style for textBlock */
            this.textBlock.children().addClass ('not-typed');
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
        
        currentCharIndex : -1 ,
        
        charCode : null ,
        
        keyCode : null ,
        
        typing : function (keyEvent) {
            this.setKeyCode (keyEvent);
            
            this.scrollCharacter ();
        } ,
        
        /**
         * Setting the appropriate keycode in the keyCode property
         * 
         * @param {event} keyEvent
         * @returns {undefined}
         */
        setKeyCode : function (keyEvent) {
            this.keyCode = keyEvent.keyCode;
        } ,
        
        scrollCharacter : function () {
            this.currentCharIndex++;
            
            if (this.currentCharIndex < this.textBlockLength) {
                this.currentChar (this.currentCharIndex);
                this.comparisonChar ();
            } else {
                /* todo */
            }
        } ,
        
        currentChar : function (charIndex) {
            let element = this.textBlock.children().eq (charIndex);
            
            this.charCode = element.text ().charCodeAt (0);
            
            element.addClass ('ss-current-char');
        } ,
        
        comparisonChar : function () {
            if (this.keyCode == this.charCode) {
                this.textBlock
                    .children()
                    .eq (this.currentCharIndex)
                    .addClass ('ss-typed-char');
            } else {
                this.textBlock
                    .children()
                    .eq (this.currentCharIndex)
                    .addClass ('ss-mistake-char');
            }

        } ,
        
        typedChar : function () {
            
        } ,
        
        resetScrollChar : function () {
            this.currentCharIndex = -1;
        } 
        
        
    };
    
//    TypingControll.keyPress();
    
    $('body').keypress(function (keyEvent) {
        TypingControll.keyPress (keyEvent);
    });
});

