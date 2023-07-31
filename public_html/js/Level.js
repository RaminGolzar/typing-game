const Level = {
    maxLevel : 5 ,
    
    levelCounter : 1 ,
    
    elemLevelCounter : $('#level-counter') ,
    
    goNext : function () {
        if (! this.isLastLevel()) {
            this.levelIncrease();
        }
    } ,
    
    levelIncrease : function () {
        this.levelCounter++;
        this.elemLevelCounter.text (this.levelCounter);
    } ,
    
    isLastLevel : function () {
        return this.levelCounter < this.maxLevel ? false : true;
    } ,
    
    reset : function () {
        this.levelCounter = 1;
        this.elemLevelCounter.text ('1');
    } ,
};
