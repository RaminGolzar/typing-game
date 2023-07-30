/* global embed, lorem */

/* todo: delete below line */
//$(document).ready (function () {
    const TypingControll = {
        textBlock : $('#text-block') ,
        
        /**
         * Allowed: start , typing , typed , endTime
         */
        textBlockState : 'start' , 
        
        typingStartTime : 0 ,
        
        typingTimeout : 10000 ,
        
        /**
         * Object initializer function
         * 
         * @param {object} keyEvent
         * @returns {undefined}
         */
        run : function (keyEvent) {
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
         * Generate lorem ipsum
         * 
         * @returns {Array|String}
         */
        genLorem : function () {
            let loremIpsum = lorem.genLorem(status.level , 3);
            
            this.textBlockLength = loremIpsum.length;
            
            return embed.run (loremIpsum);
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
            
            this.textBlockAction ();
            
            this.currentCharAction ();
        } ,
        
        /**
         * Perform operations related to the text box
         * 
         * @returns {undefined}
         */
        textBlockAction : function () {
            this.runAnimation ();
            
            this.newLoremForTextBlock ();
            
            this.initStyle ();
        } ,
        
        /**
         * set default style for all children of textBlock
         * 
         * @returns {undefined}
         */
        initStyle : function () {
            let allChar = this.textBlock.children();
            
            this.setClass (allChar , 'ss-not-typed-char');
        } ,
        
        /**
         * Run a animation for the textBlock
         * 
         * @returns {undefined}
         */
        runAnimation : function () {
            this.textBlock.stop()
                .css ({top : '0px'})
                .animate ({top : '+=210'}, this.typingTimeout ,function () {
                    this.textBlockState = 'endTime';
                    this.textBlock.stop ();
                });
        } ,
        
        /**
         * Set new lorem ipsum for the textBlock
         * 
         * @returns {undefined}
         */
        newLoremForTextBlock : function () {
            this.textBlock.html (this.genLorem ());
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
            this.typingStartTimeSecond = this.getCurrentTime ();
        } ,
        
        /**
         * Return true, if time has expired
         * 
         * @returns {Boolean}
         */
        checkTypingTimeout : function () {
            let timeOut = this.typingStartTimeSecond + this.typingTimeout;
            
            return timeOut < this.getCurrentTime () ? true : false;
        } ,
        
        /**
         * Return the current time
         * 
         * @returns {Number}
         */
        getCurrentTime : function () {
            let ss = new Date ();
            
            return ss.getTime ();
        } ,
        
        textBlockLength : 0 ,
        
        currentCharInitValue : -1 ,
        
        currentCharIndex : -1 ,
        
        charCode : null ,
        
        keyCode : null ,
        
        /**
         * The act of typing
         * 
         * @param {type} keyEvent
         * @returns {undefined}
         */
        typing : function (keyEvent) {
            this.setKeyCode (keyEvent);
            
            this.nextChar ();
            
            this.currentCharAction ();
            
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
            if (! this.isLastChar (false)) {
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
        isLastChar : function (lessThanOrEqual) {
            if (lessThanOrEqual) {
                return this.currentCharIndex <= (this.textBlockLength - 1) ? false : true;
            } else {
                return this.currentCharIndex < (this.textBlockLength - 1) ? false : true;
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
            if (this.compareCodes ()) {
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
        compareCodes : function () {
            return this.keyCode == this.charCode ? true : false;
        } ,
        
        /**
         * Reset the currentCharIndex property
         * 
         * @returns {undefined}
         */
        resetScrollChar : function () {
            this.currentCharIndex = this.currentCharInitValue;
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
        
        /**
         * Recording a red sign
         * 
         * @returns {undefined}
         */
        recordRedSign : function () {
            this.redSignCounter++;
            
            if (! this.isGameOver ()) {
                this.redSignAnimation ();
            
                this.newTextBlock ();
            } else { /* game over */
                /* todo: this code is temporary */
                this.textBlockState = 'gameOver';
                
                this.redSignAnimation ();
                
                End.showGameOver ();
            }
        } ,
        
        /**
         * Record number of the char, word & mistake
         * 
         * @returns {undefined}
         */
        recording : function () {
            this.recordLastWord ();
            
            this.normalRecord ();
        } ,
        
        /**
         * Record number of the word, if it was last word
         * 
         * @returns {undefined}
         */
        recordLastWord : function () {
            if (this.isLastChar (false)) {
                Record.addWord 
                (
                    true , 
                    this.checkTypingTimeout() , 
                    this.textBlockState 
                );
            }
        } ,
        
        /**
         * This is a normal recording
         * 
         * @returns {undefined}
         */
        normalRecord : function () {
            if (this.compareCodes ()) {
                Record.addChar ();
                
                Record.addWord (false , null , null , this.keyCode);
            } else {
                Record.addMistake ();
            }
        } 
    };
    

    /* todo: delete belove code */
    $('body').keypress(function (keyEvent) {
        TypingControll.run (keyEvent);
    });
    
    /* todo: delete below line */
//});

