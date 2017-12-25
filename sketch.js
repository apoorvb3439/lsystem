let counter;
let randomness=0.8;
let len=1.8;
let angle;
let axiom="X";
let sentence;
let rules=[];
let timer;

rules[0] = {
	a: "F",
	b: "FF"
}

rules[1] = {
	a: "X",
	b: "F-[[X]+X]+F[+FX]-X"
}

function setup() {
    counter=0;
	sentence=axiom;
    angle=radians(25);
    timer=0;
    createCanvas(windowWidth, windowHeight);
    while(counter<7){
        generater();
        counter++;
    }
}

function draw(){
    //frameRate(1200);
    turtle();
    //noLoop();
}

function generater() {
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  //createP(sentence);
}

function turtle() {
    resetMatrix();
    background(250);
    let c;
    translate(width/2, height);
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        if (current == "F") {
            c=color(34,139,34);
          stroke(c);
          //endx=random(-randomness,randomness);
          //endy=-len+random(-randomness,randomness);
          endx=randomness*(1/2-noise(timer++));
          endy=-len;//+randomness*(1/2-noise(timer++));
          line(0, 0, endx, endy);
          translate(endx, endy);
          timer++;
        } else if (current == "+") {
          rotate(angle);
        } else if (current == "-") {
          rotate(-angle)
        } else if (current == "[") {
          push();
        } else if (current == "]") {
          pop();
        }else{

        }
    }
}
