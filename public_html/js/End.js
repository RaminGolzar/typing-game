const End = {
    gameOver : $('#game-over') ,
    
    youWin : $('#you-win') ,
    
    showGameOver : function () {
        this.gameOver.fadeIn ();
    } ,
    
    showYouWin : function () {
        this.youWin.fadeIn ();
    } ,
    
    hide : function () {
        this.gameOver.hide ();
        
        this.youWin.hide ();
    } 
};