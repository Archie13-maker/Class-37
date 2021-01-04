class Form{
    constructor(){
    this.input=createInput("Name");
    this.button=createButton("Play");
    this.greeting=createElement("h2");
    }
    hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    }
    display(){
        var title= createElement("h1");
        title.html("Car Racing Game");
        title.position(430,100);

        this.input.position(430, 160);
        this.button.position(450,200);

       this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var name= this.input.value();
        playerCount= playerCount+1;
        player.index=playerCount;
        player.update(name);
        player.updateCount(playerCount);
        this.greeting.html("Hello "+ player.name);
        this.greeting.position(130,160);
        })


    
    }
}