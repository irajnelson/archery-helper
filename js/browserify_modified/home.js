(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const fs = require('fs');
const sessions = require("../sessions");

class Round{
    constructor(score, aimSpot, arrowLocations){
        this.score = score;
        this.aimSpot = aimSpot;
        this.arrowLocations = arrowLocations;
    }
}
class Session{
    constructor(rounds){
        this.sessionNumber = -1;
        this.rounds = rounds;
    }

    getRounds() {
        return this.rounds;
    }

    addRound(round) {
        this.rounds.push(round);
    }

    getSessionNumber() {
        return this.sessionNumber;
    }

    setSessionNumber(newSessionNumber) {
        this.sessionNumber = newSessionNumber;
    }
}

function addRound(currentSession, score, aimSpot, arrowLocations) {
    currentSession.push(new Round(score, aimSpot, arrowLocations));
}

function addSession(currentSession, lastRound) {
    currentSession.push(lastRound);
    sessions.push(currentSession);
    fs.writeFileSync("./sessions.json", JSON.stringify(sessions), err => {
        // Checking for errors 
            if (err) throw err;

        // Success 
            console.log("Done writing");
    });
    currentSession = new Session([]);
}

// class SessionList{
//     constructor(date, numberOfRounds, avgScore, sessionData){
//         this.date = date;
//         this.numberOfRounds = numberOfRounds;
//         this.avgScore = avgScore;
//         this.sessionData = sessionData;
//     }
// }

const image1 = document.getElementById("target1");
const image2 = document.getElementById("target2");

let currentSession = new Session([]);

const leftObject = document.getElementById("round-side-rect");
const leftOffset = leftObject.offsetWidth;

const middleObject = document.getElementById("left");
const middleOffset = middleObject.offsetWidth;

const dotOffset = 5;

const dot1 = document.getElementById("dot1");
const dots_fired = [
    document.getElementById("dot2"),
    document.getElementById("dot3"),
    document.getElementById("dot4")
];
const testDot = document.getElementById("testDot");

// const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("next-arrow");
const doneButton = document.getElementById("hit_spots");

const arrowCounter = document.getElementById("arrow-count");

let arrow_aimed = [];
let arrows_fired = [];
let currentArrowIndex = 0;

function getMousePos(e, image) {
    console.log("Client X:"+e.clientX);
    console.log("Client Y:"+e.clientY);
    return [e.clientX-image.x, e.clientY-image.y];
}


image1.onclick = function(e){
    let image1Rect = image1.getBoundingClientRect();
    console.log("image 1: " + image1Rect.left + " " + image1Rect.top);
    arrow_aimed[0] = getMousePos(e, image1);
    console.log("click x: " + arrow_aimed[0][0] + " click y: " + arrow_aimed[0][1]);
    dot1.style.left = (arrow_aimed[0][0] + image1.x - leftOffset - dotOffset) + "px";
    dot1.style.top = (arrow_aimed[0][1] + image1.y - dotOffset) + "px";
    
};

image2.onclick = function(e){
    console.log("image 2: " +image2.x + " " + image2.y);
    arrows_fired[currentArrowIndex] = getMousePos(e, image2);
    console.log(arrows_fired[currentArrowIndex][0]);
    console.log(arrows_fired[currentArrowIndex][1]);
    dots_fired[currentArrowIndex].style.left = (arrows_fired[currentArrowIndex][0] + image2.x - leftOffset - middleOffset - dotOffset) + "px";
    dots_fired[currentArrowIndex].style.top = (arrows_fired[currentArrowIndex][1] + image2.y - dotOffset) + "px";
};

// previousButton.onclick = function(){
//     if(currentArrowIndex == 0){
//         currentArrowIndex = 2
//         dots_fired[0].style.backgroundColor = "green";
//     } else {
//         dots_fired[currentArrowIndex--].style.backgroundColor = "green";
//     }
//     dots_fired[currentArrowIndex].style.backgroundColor = "blue";
//     console.log(currentArrowIndex);
//     arrowCounter.innerHTML = currentArrowIndex+1;
// }

nextButton.onclick = function(){
    console.log("Button clck");
    if(currentArrowIndex == 2){
        currentArrowIndex = 0
        dots_fired[2].style.backgroundColor = "green";
    } else {
        dots_fired[currentArrowIndex++].style.backgroundColor = "green";
    }
    dots_fired[currentArrowIndex].style.backgroundColor = "blue";
    console.log(currentArrowIndex);
    arrowCounter.innerHTML = currentArrowIndex+1;
}



doneButton.onclick = function(){
    var allPlaced = true;
    if(arrow_aimed[0][0] == 10000) {
        allPlaced = false;
    }
    for(var i = 0; i<3; i++){
        if(arrows_fired[i][0] == 10000){
            allPlaced = false;
        }
    }

    if(allPlaced){
        var averageX = 0;
        var averageY = 0;

        for(i = 0; i<3; i++){
            averageX+=arrows_fired[i][0];
            averageY+=arrows_fired[i][1];
        }

        averageX/=3;
        averageY/=3;

        let aimOffsetX = 200-averageX;
        let aimOffsetY = 200-averageY;

        testDot.style.left = (arrow_aimed[0][0] + aimOffsetX + image1.x - dotOffset) + "px";
        testDot.style.top = (arrow_aimed[0][1] + aimOffsetY + image1.y - dotOffset) + "px";
        console.log(testDot.style.left + " E " + testDot.style.top);
        console.log(aimOffsetX + " A " + aimOffsetY);

    } else {
        alert("OOPSIE DAISY YOU DDINT PLACE THEM ALL? ? ? ?? ");
    }
}

},{"../sessions":3,"fs":1}],3:[function(require,module,exports){
module.exports=[{"sessionNumber":0,"rounds":[{"roundNumber":0,"score":7,"aimSpot":[100,200],"arrowLocations":[[125,225],[150,250],[175,275]]},{"roundNumber":1,"score":8,"aimSpot":[101,201],"arrowLocations":[[126,226],[151,252],[176,276]]},{"roundNumber":2,"score":9,"aimSpot":[102,202],"arrowLocations":[[127,227],[151,252],[177,277]]}]},{"sessionNumber":1,"rounds":[{"roundNumber":0,"score":7,"aimSpot":[100,200],"arrowLocations":[[125,225],[150,250],[175,275]]},{"roundNumber":1,"score":8,"aimSpot":[101,201],"arrowLocations":[[126,226],[151,252],[176,276]]},{"roundNumber":2,"score":9,"aimSpot":[102,202],"arrowLocations":[[127,227],[151,252],[177,277]]}]}]
},{}]},{},[2]);
