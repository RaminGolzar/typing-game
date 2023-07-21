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
        
        /**
         * Allowed: start , typing , typed , endTime
         */
        textBlockState : 'start' , 
        
        typingStartTime : 0 ,
        
        typingTimeout : 1000 ,
        
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
            } else if (this.textBlockState == 'typing' && this.checkTypingTimeout ()) {
                this.STBS ('endTime');
                this.recordRedSign ();
            } else if (this.textBlockState == 'typing' && !this.checkTypingTimeout ()) {
                this.typing (keyEvent);
            }
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
            
            this.runAnimation ();
            
            /* set default style for all children of textBlock */
            let allChar = this.textBlock.children();
            
            this.setClass (allChar , 'ss-not-typed-char');
            
            this.currentChar();
        } ,
        
        runAnimation : function () {
            this.textBlock.stop()
                .css ({top : '0px'})
                .html (this.genLorem())
                .animate ({top : '+=210'}, this.typingTimeout ,function () {
                    this.textBlockState = 'endTime';
                    this.textBlock.stop ();
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
        
        currentCharIndex : -1 ,
        
        charCode : null ,
        
        keyCode : null ,
        
        typing : function (keyEvent) {
            this.setKeyCode (keyEvent);
            
            this.scrollChar ();
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
        
        scrollChar : function () {
            this.currentCharIndex++;
            
            if (this.currentCharIndex < (this.textBlockLength - 1)) {
                this.currentChar ();
                this.comparisonChar ();
            } else {
                this.textBlockState = 'typed';
                this.newTextBlock();
            }
        } ,
        
        currentChar : function () {
            let element = this.getCurrentChar ();
            
            this.setCharCode ();
            
            this.setClass (element , 'ss-current-char');
        } ,
        
        getCurrentChar : function () {
            return this.textBlock
                .children()
                .eq (this.currentCharIndex + 1);
        } ,
        
        setCharCode : function () {
            this.charCode = this.textBlock
                .children()
                .eq (this.currentCharIndex)
                .text ()
                .charCodeAt (0);
        } ,
        
        comparisonChar : function () {
            if (this.keyCode == this.charCode) {
                let specificChar = this.textBlock
                    .children()
                    .eq (this.currentCharIndex);
                        
                    this.setClass (specificChar , 'ss-typed-char');
            } else {
                let ss = this.textBlock
                    .children()
                    .eq (this.currentCharIndex);

                    this.setClass (ss , 'ss-mistake-char');
            }
        } ,
        
        resetScrollChar : function () {
            this.currentCharIndex = -1;
        } ,
        
        /**
         * Set a css class for one character
         * 
         * @param {object} element
         * @param {string} className
         * @returns {undefined}
         */
        setClass : function (element , className) {
            let classesNames = 'ss-current-char ss-mistake-char ss-typed-char ss-not-typed-char';
            
            element.removeClass (classesNames);
            
            element.addClass (className);
        } ,
        
        /*------------------------------------------------------------------------
         * Red Sign
         * -------------------------------------------------------------------------
         */
        
        redSignCounter : 0 ,
        
        maxRedSign : 3 ,
        
        resetRedSign : function () {
            $('red-sign-1 , red-sign-2 , red-sign-1').removeClass ('w3-text-red');
            
            $('red-sign-1 , red-sign-2 , red-sign-1').addClass ('w3-text-white');
        } ,
        
        recordRedSign : function () {
            this.redSignCounter++;
            
            if (this.redSignCounter < this.maxRedSign) {
                this.redSignAnimation ();
            
                this.newTextBlock ();
            } else { /* game over */
                /* todo: this code is temporary */
                this.textBlockState = 'gameOver';
                
                this.redSignAnimation ();
                
                $('#game-over').fadeIn ();
            }
        } ,
        
        redSignAnimation : function () {
            $('#red-sign-' + this.redSignCounter)
                .removeClass ('w3-text-white')
                .addClass ('w3-text-red');
            } 
    };
    
//    TypingControll.keyPress();
    
    $('body').keypress(function (keyEvent) {
        TypingControll.keyPress (keyEvent);
    });
});

