
var count = 0;
let lang = navigator.language || 'en-US';
var form;

var speechToText;
let speechRec;

function setup() {
  createCanvas(windowWidth - 100, windowHeight - 100);

  form = new Form();

  resetSketch();

  var reload = createButton("Reload");
  reload.style('background-color', color(200, 54, 91));
  reload.mousePressed(resetSketch);
  reload.position(windowWidth / 2 - 250, windowHeight / 2 + 100);

}

function draw() {
  background(3,28,50 );
}

function resetSketch() {

  speechRec = new p5.SpeechRec(lang, gotSpeech)

  //let continuous = true;
  //let interim = false;

  speechRec.start();

  
  form.display();
}

function gotSpeech() {

  speechToText = speechRec.resultString;
  count = 0;

  if (speechRec.resultValue) {

    speechToText = speechRec.resultString;
    words = speechToText.split(" ");

    for (i = 0; i < words.length; i++) {
      // inner loop -- do the count
      if (words[i] != "")
        count += 1;
    }

    /*  text("count: " + count, windowWidth / 2 -300, windowHeight / 2 -200);
    
     text(speechToText, windowWidth / 2 -300, windowHeight / 2 -100); */
  }
}
