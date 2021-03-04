class Question{
    constructor(){
        this.input1 = createInput ("Your name please!");
        this.input2 = createInput ("Write the correct option");

        this.button = createButton ('Submit');

        this.title = createElement('h2');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');

    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.title.hide();
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
    }

    display(){

    
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- How many months have 28 days? ");
        this.question.position(145,75);

        this.option1.html("1: One");
        this.option1.position(150,100);

        this.option2.html("2: Five");
        this.option2.position(150,120);

        this.option3.html("3: Twelve");
        this.option3.position(150,140);

        this.input1.position(170,230);
        this.input2.position(370,230);

        this.button.position(200,270);

        this.button.mousePressed(()=>{

            this.button.hide();

            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
             
        });

    }
}