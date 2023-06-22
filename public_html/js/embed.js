$(document).ready(function () {
    const embed = {
        run : function (wordCount = 1 , minLen = 0 , maxLen = 0) {
            let loremIpsum = lorem.genLorem (wordCount , minLen , maxLen);

            let exploded = this.explode (loremIpsum);
            
            let embed = this.embed(exploded);
            
            $('#footer').append(embed);
        } ,

        explode : function (lorem) {
            return lorem.split ('');
        } ,

        embed : function (arrayLorem) {
            let result = '';
            
            for (var i = 0; i < arrayLorem.length ; i++) {
                let elem = $('<span></span>');
                
                elem.text(arrayLorem [i]);
                
                result += elem;
            }
            
            return result;
        } ,
    }

    embed.run();

    alert ('{ Ok }');
})
