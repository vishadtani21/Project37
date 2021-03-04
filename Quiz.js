class Quiz
{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef  = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }

    }

    play(){

        background("yellow");

        question.hide();

        textSize(30);
        fill ("black");
        textFont ("Times New Roman");
        text("Results!!",350,80);

        Contestant.getContestantInfo();

        if(allContestants !== undefined){
            var display_position = 160;

            textSize(25);
            fill ("purple")
            textFont ("Monotype Corsiva");
            text("Note : Contestants who answered correct are highlighted in green color!", 140 , 145);

            textFont ("Times New Roman");
            for(var plr in allContestants){
                var correctAns = "3";

                if(correctAns === allContestants[plr].answer)
                    fill ("green");
                else 
                    fill ("red");

                    display_position+=30;
                    textSize(20);
                    text(allContestants[plr].name + ":" + allContestants[plr].answer,145,display_position);
                
            }
        }


    }







}

