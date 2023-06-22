const lorem = {
    loremIpsum : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst. Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst. Vivamus facilisis diam at odio. Mauris dictum, nisi eget consequat elementum, lacus ligula molestie metus, non feugiat orci magna ac sem. Donec turpis. Donec vitae metus. Morbi tristique neque eu mauris. Quisque gravida ipsum non sapien. Proin turpis lacus, scelerisque vitae, elementum at, lobortis ac, quam. Aliquam dictum eleifend risus. In hac habitasse platea dictumst. Etiam sit amet diam. Suspendisse odio. Suspendisse nunc. In semper bibendum libero. Proin nonummy, lacus eget pulvinar lacinia, pede felis dignissim leo, vitae tristique magna lacus sit amet eros. Nullam ornare. Praesent odio ligula, dapibus sed, tincidunt eget, dictum ac, nibh. Nam quis lacus. Nunc eleifend molestie velit. Morbi lobortis quam eu velit. Donec euismod vestibulum massa. Donec non lectus. Aliquam commodo lacus sit amet nulla. Cras dignissim elit et augue. Nullam non diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Aenean vestibulum. Sed lobortis elit quis lectus. Nunc sed lacus at augue bibendum dapibus.' ,
    
    loremToArray : function () {
        this.cleanMarks ();
        
        this.loremIpsum = this.loremIpsum.split(' ');
    } ,
    
    getIndex : function (count , minLen = 0 , maxLen = 0){
        let result = [];
        
        for (var i = 0; i < count; i++) {
            result [i] = this.extractCondition (minLen , maxLen);
        }
        
        return result;
    } ,
    
    extractCondition : function (minLen , maxLen) {
        let counter = 0;
        
        let word = '';
        
        if (minLen == 0 && maxLen == 0) {
            return this.loremIpsum[this.randPos()];
        } else if (minLen != 0 && maxLen == 0) {
            do {
                word = this.loremIpsum [this.randPos()];
                
                /* infinity control */
                if (++counter > 1000) {
                    break;
                }
            } while (word.length < minLen);
        } else if (minLen == 0 && maxLen != 0) {
            do {
                word = this.loremIpsum [this.randPos()];
                
                /* infinity control */
                if (++counter > 1000) {
                    break;
                }
            } while (word.length > maxLen);
        } else if (minLen != 0 && maxLen != 0) {
            do {
                word = this.loremIpsum [this.randPos()];
                
                /* infinity control */
                if (++counter > 1000) {
                    break;
                }
            } while (word.length < minLen  || word.length > maxLen);
        }
        
        return word;
    } ,
    
    randPos : function () {
        return Math.round (Math.random() * this.loremIpsum.length);
    } ,
    
    cleanMarks : function () {
        this.loremIpsum = this.loremIpsum.replaceAll ('.' , '');
        
        this.loremIpsum = this.loremIpsum.replaceAll (',' , '');
    } ,
    
    /**
     * Generate Lorem Ipsum
     */
    genLorem : function (count = 1 , minLen = 0 , maxLen = 0){
        this.loremToArray();

        let indexes = this.getIndex (count , minLen , maxLen);

        return indexes.join (' ');
    }
}
