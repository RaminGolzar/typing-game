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
        
        typingTimeout : 10000 ,
        
        /**
         * Generate lorem ipsum
         * 
         * @param {int} wordCount
         * @param {int} minLen
         * @param {int} maxLen
         * @returns {Array|String}
         */
        genLorem : function (wordCount = 1 , minLen = 0 , maxLen = 0) {
            /* todo: uncomment belove line & delete the next line */
//            let loremIpsum = lorem.genLorem(status.level);
            let loremIpsum = lorem.genLorem (3 , 2 , 4);
            
            this.textBlockLength = loremIpsum.length;
            
            loremIpsum = embed.run (loremIpsum);
            
            return loremIpsum;
        } ,
        
        keyPress : function (keyEvent) {
            if (this.textBlockState === 'start' || this.textBlockState === 'endTime') {
                this.newTextBlock ();
            } else if (this.textBlockState === 'typing' && this.checkTypingTimeout ()) {
                this.STBS ('endTime');
                this.recordRedSign ();
            } else if (this.textBlockState === 'typing' && !this.checkTypingTimeout ()) {
                this.typing (keyEvent);
            }
        } ,
        
        /**
         * Generate a new text block
         * 
         * @returns {undefined}
         */
        newTextBlock : function () {
            this.detectionRecordWord (true);
            
            this.STBS ('typing');
            
            this.setTypingStartTime ();
            
            this.resetScrollChar ();
            
            this.runAnimation ();
            
            /* set default style for all children of textBlock */
            let allChar = this.textBlock.children();
            
            this.setClass (allChar , 'ss-not-typed-char');
            
            this.currentCharAction ();
        } ,
        
        runAnimation : function () {
            this.textBlock.stop()
                .css ({top : '0px'})
                .html (this.genLorem (status.level))
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
            
            this.nextChar ();
            
            this.recording ();
            
            this.compareOrNew ();
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
        
        /**
         * Increment the currentCharIndex property
         * 
         * @returns {undefined}]
         */
        nextChar : function () {
            this.currentCharIndex++;
        } ,
        
        /**
         * distinguishing between, the act of analogy 
         * or the new case
         * 
         * @returns {undefined}
         */
        compareOrNew : function () {
            if (this.checkCharIndex (false)) {
                this.currentCharAction ();
                this.comparisonChar ();
            } else {
                this.textBlockState = 'typed';
                this.newTextBlock();
            }
        } ,
        
        /**
         * Checking the char index based on length of 
         * the textBlock
         * 
         * @param {boolean} lessThanOrEqual
         * @returns {Boolean}
         */
        checkCharIndex : function (lessThanOrEqual) {
            if (lessThanOrEqual) {
                return this.currentCharIndex <= (this.textBlockLength - 1) ? true : false;
            } else {
                return this.currentCharIndex < (this.textBlockLength - 1) ? true : false;
            }
        } ,
        
        /**
         * Perform actions on current character
         * 
         * @returns {undefined}
         */
        currentCharAction : function () {
            let element = this.getCurrentChar ();
            
            this.setCharCode ();
            
            this.setClass (element , 'ss-current-char');
        } ,
        
        /**
         * Get html element of current character
         * 
         * @returns {unresolved}
         */
        getCurrentChar : function () {
            return this.textBlock
                .children()
                .eq (this.currentCharIndex + 1);
        } ,
        
        /**
         * Setting the character code according to 
         * the current character
         * 
         * @returns {undefined}
         */
        setCharCode : function () {
            this.charCode = this.textBlock
                .children()
                .eq (this.currentCharIndex)
                .text ()
                .charCodeAt (0);
        } ,
        
        /**
         * Setting the appropriate style for typed character
         * 
         * @returns {undefined}
         */
        comparisonChar : function () {
            if (this.codeValidation ()) {
                let specificChar = this.textBlock
                    .children()
                    .eq (this.currentCharIndex);
                        
                this.setClass (specificChar , 'ss-typed-char');
            } else {
                let element = this.textBlock
                    .children ()
                    .eq (this.currentCharIndex);

                this.setClass (element , 'ss-mistake-char');
            }
        } ,
        
        /**
         * Validation keys pressed from the keyboard
         * 
         * @returns {Boolean}
         */
        codeValidation : function () {
            return this.keyCode == this.charCode ? true : false;
        } ,
        
        /**
         * Reset the currentCharIndex property
         * 
         * @returns {undefined}
         */
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
        
        /**
         * Reset the red sign style
         * 
         * @returns {undefined}
         */
        resetRedSign : function () {
            $('red-sign-1 , red-sign-2 , red-sign-1').removeClass ('w3-text-red');
            
            $('red-sign-1 , red-sign-2 , red-sign-1').addClass ('w3-text-white');
        } ,
        
        /**
         * Recording a red sign
         * 
         * @returns {undefined}
         */
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
        
        /**
         * Set a style for a red sign
         * 
         * @returns {undefined}
         */
        redSignAnimation : function () {
            $('#red-sign-' + this.redSignCounter)
                .removeClass ('w3-text-white')
                .addClass ('w3-text-red');
        } ,
        
        /*----------------------------------------------------------------------
         * Record Statistics
         * --------------------------------------------------------------------
         */
        
        charCounter : 0 ,
        
        wordCounter : 0 ,
        
        mistakeCounter : 0 ,
        
        recording : function () {
            if (! this.checkCharIndex (true)) {
                return;
            }
            
            this.currentCharAction ();
            
            if (this.codeValidation ()) {
                this.recordStatistics ('char');
                
                this.detectionRecordWord ();
            } else {
                this.recordStatistics ('mistake');
            }
        } ,
        
        /**
         * Record all types of statistics
         * 
         * @param {type} item
         * @returns {undefined}
         */
        recordStatistics : function (item) {
            switch (item) {
                case 'mistake':
                    this.recordMistake (); 
                    break;
                case 'word':
                    this.recordWord (); 
                    break;
                case 'char':
                    this.recordChar (); 
                    break;
            }
        } ,
        
        /**
         * Add one to the number of the mistake counter
         * 
         * @returns {undefined}
         */
        recordMistake : function () {
            this.mistakeCounter++;
            $('#mistake-counter').text (this.mistakeCounter);
        } ,
        
        /**
         * Detection for record word
         * 
         * @returns {undefined}
         */
        detectionRecordWord : function (directRecord = false) {
            if (directRecord) {
                if (!this.checkTypingTimeout () && this.textBlockState !== 'start') {
                    this.recordStatistics ('word');
                }
            } else {
                if (this.spacebarValidation ()) {
                    this.recordStatistics ('word');
                }
            }

        } ,
        
        /**
         * Spacebar validation
         * 
         * Returns "true" if the key is valid
         * 
         * @returns {Boolean}
         */
        spacebarValidation : function () {
            let spaceKeyCode = 32;
            
            return this.keyCode == spaceKeyCode ? true : false;
        } ,
        
        /**
         * Add one to the number of word counter
         * 
         * @returns {undefined}
         */
        recordWord : function () {
            this.wordCounter++;
            $('#word-counter').text (this.wordCounter);
        } ,
        
        /**
         * Add one to the number of char counter
         * 
         * @returns {undefined}
         */
        recordChar : function () {
            this.charCounter++;
            $('#char-counter').text (this.charCounter);
        } ,
        
        /**
         * Reset the statistics counters
         * 
         * @returns {undefined}
         */
        resetStatistics : function () {
            this.wordCounter = 0;
            this.charCounter = 0;
            this.mistakeCounter = 0;
            
            $('#word-counter').text (this.wordCounter);
            $('#char-counter').text (this.charCounter);
            $('#mistake-counter').text (this.mistakeCounter);
        } 
    };
    
//    TypingControll.keyPress();
    
    $('body').keypress(function (keyEvent) {
        TypingControll.keyPress (keyEvent);
    });
});

