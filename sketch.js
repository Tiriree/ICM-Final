//new one
//reference
//http://ability.nyu.edu/p5.js-speech/

// //video capture
// var videoInput;

var videoAdd = null;
var videoList = ["video/blah.mov", "video/umm.mov", "video/bro.mov",
    "video/ah.mov", "video/hello.mov", "video/p5.mov",
    "video/silent.mov", "video/do.mov", "video/next video.mov",
    "video/oh look.mov", "video/programmings.mov", "video/relax.mov",
    "video/wonderful things.mov", "video/you are watching.mov",
    "video/you know.mov"
];
var videoListBig = ["video/no.mov","video/oops.mov"];

var videoListM = ["video/all the time.mov","video/alright.mov",
    "video/coding.mov","video/conditional statement.mov",
    "video/curly bracket.mov", "video/execute smile.mov",
    "video/execute.mov", "video/false.mov", "video/haha.mov",
    "video/hehe.mov", "video/hi im mimi.mov", "video/hi m.mov",
    "video/if else statement.mov","video/Im mimi.mov",
    "video/programming.mov","video/see.mov","video/showover.mov",
    "video/sort of.mov","video/thats right.mov",
    "video/thats the good question.mov", "video/true.mov",
    "video/very good.mov","video/very smart.mov",
    "video/bouncing ball.mov", "video/brandon.mov",
    "video/feeling.mov","video/noise.mov","video/say my name.mov"
];


//ui
var menuLoaded = 0;
var label = null;
var input;
var sliderDiv = null;
var inputDiv = null;
var vslider;

//sound
var mic = null;
var volume = null;
var myVoice = null;
var bouncingVid;
var x = 0;
var y = 100;
var xSpeed = 1;
var ySpeed = 2;


function setup() {

    // setupWebCam();

    var slider = createDiv('');
    slider.id("slider");
    vslider = createSlider(0., 100., 100.);
    vslider.id("vslider");
    slider.child(vslider);
    vslider.position(450, 140);
    vslider.mouseReleased(setVolume);

    createCanvas(windowWidth, windowHeight);

    // setupTracker();
    setupAudio();



    //leave her here, dont touch
    input = select("#input");

    background(255);

    // showVideo();


}



function setupAudio() {
    myVoice = new p5.Speech();
    myVoice.setVoice(3);
 
    //microphone
    mic = new p5.AudioIn();
    mic.start();
}


function doSpeak() {
  word = input.value();
  // myVoice.interrupt = checkbox.elt.checked;

  myVoice.speak(word); // debug printer for voice options
  doDisplay();
  doVideo();
  doBigvideo();
  doMvideo();
}

function doDisplay() {
  // addFloatingText(text);
  // to create sentence when type

  fill(10);
  textSize(20);
  var aux1 = random(0, width);
  var aux2 = height / 2;
  // var aux3 = map(volume, levelTwo, levelMax, 0, width);
  text(word, aux1, aux2);
}



function doVideo() {

  if (word.indexOf("blah") != -1) {
    videoAdd = videoList[0];
  } else if (word.indexOf("umm") != -1) {
    videoAdd = videoList[1];
  } else if (word.indexOf("bro") != -1) {
    videoAdd = videoList[2];
  } else if (word.indexOf("ah") != -1) {
    videoAdd = videoList[3];
  } else if (word.indexOf("hello") != -1) {
    videoAdd = videoList[4];
  } else if (word.indexOf("p5") != -1) {
    videoAdd = videoList[5];
  } else if (word.indexOf("silent") != -1) {
    videoAdd = videoList[6];
  } else if (word.indexOf("do") != -1) {
    videoAdd = videoList[7];
    } else if (word.indexOf("next video") != -1) {
    videoAdd = videoList[8];
    } else if (word.indexOf("oh look") != -1) {
    videoAdd = videoList[9];
    } else if (word.indexOf("programmings") != -1) {
    videoAdd = videoList[10];
    } else if (word.indexOf("relax") != -1) {
    videoAdd = videoList[11];
    } else if (word.indexOf("wonderful things") != -1) {
    videoAdd = videoList[12];
        } else if (word.indexOf("you are watching") != -1) {
    videoAdd = videoList[13];
        } else if (word.indexOf("you know") != -1) {
    videoAdd = videoList[14];
        } else if (word.indexOf("you know") != -1) {
    videoAdd = videoList[15];

  } else {
    videoAdd = null;

  }

  if (videoAdd !== null) {
    // console.log("play video");
    vid = createVideo(videoAdd);

    vid.loop();
    //vid.hide();

    //image(vid, 100, 100, 100, 100);
    vid.position(random(width), random(height));
    vid.size(random(300), random(300));
  }
}

function doBigvideo() {
    if (word.indexOf("no") != -1) {
    videoAdd = videoListBig[0];
  } else if (word.indexOf("oops") != -1) {
    videoAdd = videoList[1];
  } else {
    videoAdd = null;
  }

    if (videoAdd !== null) {
    // console.log("play video");
    vid = createVideo(videoAdd);
		vid.loop();
     //vid.hide();b
    vid.position(0,150);
		// vid.size(1000,1000);
    vid.size(random(500,1000), random(500,1000));
  }

}

function doMvideo() {
    if (word.indexOf("all the time") != -1) {
    videoAdd = videoListM[0];
  } else if (word.indexOf("alright") != -1) {
    videoAdd = videoListM[1];
  } else if (word.indexOf("coding") != -1) {
    videoAdd = videoListM[2];
  } else if (word.indexOf("conditional statement") != -1) {
    videoAdd = videoListM[3];
  } else if (word.indexOf("curly bracket") != -1) {
    videoAdd = videoListM[4];
  } else if (word.indexOf("execute smile") != -1) {
    videoAdd = videoListM[5];
  } else if (word.indexOf("execute") != -1) {
    videoAdd = videoListM[6];
  } else if (word.indexOf("false") != -1) {
    videoAdd = videoListM[7];
  } else if (word.indexOf("haha") != -1) {
    videoAdd = videoListM[8];
      } else if (word.indexOf("hehe") != -1) {
    videoAdd = videoListM[9];
      } else if (word.indexOf("hi im mimi") != -1) {
    videoAdd = videoListM[10];
      } else if (word.indexOf("hi m") != -1) {
    videoAdd = videoListM[11];
      } else if (word.indexOf("if else statement") != -1) {
    videoAdd = videoListM[12];
      } else if (word.indexOf("Im mimi") != -1) {
    videoAdd = videoListM[13];
      } else if (word.indexOf("programming") != -1) {
    videoAdd = videoListM[14];
      } else if (word.indexOf("see") != -1) {
    videoAdd = videoListM[15];
      } else if (word.indexOf("showover") != -1) {
    videoAdd = videoListM[16];
      } else if (word.indexOf("sort of") != -1) {
    videoAdd = videoListM[17];
    } else if (word.indexOf("thats right") != -1) {
    videoAdd = videoListM[18];
    } else if (word.indexOf("thats the good question") != -1) {
    videoAdd = videoListM[19];
    } else if (word.indexOf("true") != -1) {
    videoAdd = videoListM[20];
    } else if (word.indexOf("very good") != -1) {
    videoAdd = videoListM[21];
    } else if (word.indexOf("very smart") != -1) {
    videoAdd = videoListM[22];
    } else if (word.indexOf("bouncing ball") != -1) {
    videoAdd = videoListM[23];
    } else if (word.indexOf("brandon") != -1) {
    videoAdd = videoListM[24];
    } else if (word.indexOf("feeling") != -1) {
    videoAdd = videoListM[25];
    } else if (word.indexOf("noise") != -1) {
    videoAdd = videoListM[26];
    } else if (word.indexOf("say my name") != -1) {
    videoAdd = videoListM[27];
  } else {
    videoAdd = null;

  }

  if (videoAdd !== null) {
    // console.log("play video");
    vid = createVideo(videoAdd);

    vid.loop();
    //vid.hide();

    //image(vid, 100, 100, 100, 100);
    vid.position(random(width), random(height));
    vid.size(random(300), random(300));

}
}

//set up volume for slider
function setVolume(){
  myVoice.setVolume(vslider.value()/100.);
}


// function updateTracker() {
//     facePositions = ctracker.getCurrentPosition();
// }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255);
}
