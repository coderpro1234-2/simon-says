var incount = 0;
var beats = [(randomNumber(1, 4))];
var score = 0;
var i = 0;
var showingbeats = 0;
function showscore() {
  setText("score", "Score: "+score);
  i = 0;
  showingbeats = 1;
  timedLoop(1000, function() {
    if (beats[i] == 1) {
    setProperty("Red", "background-color", rgb(255,127,127));
    setTimeout(function() {
      setProperty("Red", "background-color", rgb(255,0,0));
    }, 1000);
    setTimeout(function() {
      setProperty("Red", "background-color", rgb(255,0,0));
    }, 500);
    }
    else if (beats[i] == 2) {
    setProperty("Yellow", "background-color", rgb(255,255,127));
    setTimeout(function() {
      setProperty("Yellow", "background-color", rgb(255,255,0));
    }, 1000);
    setTimeout(function() {
      setProperty("Yellow", "background-color", rgb(255,255,0));
    }, 500);
    }
    else if (beats[i] == 3) {
    setProperty("Green", "background-color", rgb(127,255,127));
    setTimeout(function() {
      setProperty("Green", "background-color", rgb(0,255,0));
    }, 1000);
    setTimeout(function() {
      setProperty("Green", "background-color", rgb(0,255,0));
    }, 500);
    }
    else {
    setProperty("Blue", "background-color", rgb(127,127,255));
    setTimeout(function() {
      setProperty("Blue", "background-color", rgb(0,0,255));
    }, 1000);
    setTimeout(function() {
      setProperty("Blue", "background-color", rgb(0,0,255));
    }, 500);
    }
    i += 1;
    if (i > (beats.length - 1)) {
      stopTimedLoop();
      showingbeats = 0;
    }
  });
}
onEvent("playButton", "click", function( ) {
  setScreen("gameScreen");
  incount = 0;
  beats = [(randomNumber(1, 4))];
  score = 0;
  showscore();
});
onEvent("playAgain", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("Red", "click", function( ) {
  if (showingbeats == 0) {
    if (beats[incount] == 1) {
      incount += 1;
      if (beats.length == incount) {
        appendItem(beats, randomNumber(1, 4));
        incount = 0;
        score += 1;
        showscore();
      }
    }
    else {
      setScreen("endScreen");
      setText("scoreLabel", score);
    }
  }
});
onEvent("Yellow", "click", function( ) {
  if (showingbeats == 0) {
    if (beats[incount] == 2) {
      incount += 1;
      if (beats.length == incount) {
        appendItem(beats, randomNumber(1, 4));
        incount = 0;
        score += 1;
        showscore();
      }
    }
    else {
      setScreen("endScreen");
      setText("scoreLabel", score);
    }
  }
});
onEvent("Green", "click", function( ) {
  if (showingbeats == 0) {
    if (beats[incount] == 3) {
      incount += 1;
      if (beats.length == incount) {
        appendItem(beats, randomNumber(1, 4));
        incount = 0;
        score += 1;
        showscore();
      }
    }
    else {
      setScreen("endScreen");
      setText("scoreLabel", score);
    }
  }
});
onEvent("Blue", "click", function( ) {
  if (showingbeats == 0) {
    if (beats[incount] == 4) {
      incount += 1;
      if (beats.length == incount) {
        appendItem(beats, randomNumber(1, 4));
        incount = 0;
        score += 1;
        showscore();
      }
    }
    else {
      setScreen("endScreen");
      setText("scoreLabel", score);
    }
  }
});
