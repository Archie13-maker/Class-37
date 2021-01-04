class Game{
    constructor(){
    
    }
 getState(){
     var gameStateref= database.ref('gameState');
     gameStateref.on("value", function(data){
    gameState = data.val();
     })
 }
 update(state){
     database.ref('/').update({
         gameState: state
     })

 }
 start(){
     if (gameState===0){
         player=new Player();
         player.getCount();
         form=new Form();
         form.display();
     }
 }
 play(){
     form.hide();
     textSize(40);
     text("Game Started",120,100);
     Player.getPlayerInfo();
     if (allPlayers!== undefined){
         var displayPosition=130;
         for( var plr in allPlayers){
         if (plr==="player"+ player.index)
         fill("yellow");
         else 
         fill("black");
         displayPosition +=20

         textSize(15);
         text(allPlayers[plr].name+ ":"+ allPlayers[plr].distance, 120, displayPosition);
          }
     }
     if(keyIsDown(UP_ARROW) && player.Index!== null){
         player.distance+= 50;
         player.update();
     }
 }
}