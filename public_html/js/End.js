const End = {
    gameOver : $('#game-over') ,
    
    youWin : $('#you-win') ,
    
    nextLevel : $('#next-level') ,
    
    showGameOver : function () {
        this.gameOver.fadeIn ();
    } ,
    
    showYouWin : function () {
        this.youWin.fadeIn ();
    } ,
    
    showNextLevel : function () {
        this.nextLevel.fadeIn ();
    } ,
    
    hide : function () {
        this.gameOver.hide ();
        
        this.youWin.hide ();
        
        this.nextLevel.hide ();
    } 
};