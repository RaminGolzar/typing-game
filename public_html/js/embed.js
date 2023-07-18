
const embed = {
    /**
     * Return a lorem ipsum where each char contained
     * with a span tag
     * 
     * @param {int} wordCount
     * @param {int} minLen
     * @param {int} maxLen
     * @returns {String}
     */
    run : function (loremIpsum) {
        let exploded = this.explode (loremIpsum);

        let embed = this.embeding (exploded);

        return embed;
    } ,

    /**
     * Convert the string to an array
     * 
     * @param {type} lorem
     * @returns {unresolved}
     */
    explode : function (lorem) {
        return lorem.split ('');
    } ,

    /**
     * Enclosing each char in a span tag
     * 
     * @param {array} arrayLorem
     * @returns {Array}
     */
    embeding : function (arrayLorem) {
        let result = [];

        for (var i = 0; i < arrayLorem.length ; i++) {
            let elem = $('<span></span>');

            elem.text(arrayLorem [i]);

            result[i] = elem;
        }

        return result;
    } 
};

