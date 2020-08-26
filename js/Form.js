class Form {
    constructor() {
        this.countB = createButton('Count Words Spoken');
        this.toTextB = createButton('Convert Speech to Text');

        this.back = createButton('Back');
        this.toTextP = createP();
        this.toCountP = createP();
    }

    display() {

        this.countB.show();
        this.toTextB.show();

        this.toTextP.hide();
        this.toCountP.hide();

        let buttonColor = color(200, 54, 91);

        this.countB.style('background-color', buttonColor);
        this.toTextB.style('background-color', buttonColor);
        this.back.style('background-color', buttonColor);

        this.countB.position(windowWidth / 2 - 300, windowHeight / 2 - 200);
        this.toTextB.position(windowWidth / 2 - 300, windowHeight / 2 - 100);

        this.toCountP.position(windowWidth / 2 - 250, windowHeight / 2 - 200);
        this.toTextP.position(width / 2 - 250, height / 2 - 100);

        this.back.position(windowWidth / 2 - 250, windowHeight / 2);

        this.back.mousePressed(() => {
            this.display();
        });

        this.countB.mousePressed(() => {
            this.countB.hide();
            this.toTextB.hide();

            this.toCountP.show();
            this.toCountP.style('color', '#EBCACA');
            this.toCountP.style('font-family', 'Verdana');
            this.toCountP.html("count: " + count)
            //this.toTextP.hide();

            //text("count: " + count, windowWidth / 2 - 300, windowHeight / 2 - 200);


        });

        this.toTextB.mousePressed(() => {
            this.countB.hide();
            this.toTextB.hide();

            this.toTextP.style('color', '#EBCACA');
            this.toTextP.style('font-family', 'Verdana');
            this.toTextP.show();
            this.toTextP.html(speechToText);

            //text(speechToTextB, windowWidth / 2 - 300, windowHeight / 2 - 100);

        });

    }

}