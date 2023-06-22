const strToChar = {
    run : function (wordCount = 1 , minLen = 0 , maxLen = 0) {
        let lorem = lorem.genLorem (wordCount , minLen , maxLen);
        
        this.explode (lorem);
    } ,
    
    explode : function (lorem) {
        let result = '';
        
        alert (lorem.split (' '));
    }
}

strToChar.run(4);

alert ('{ Ok }');