const image1 = document.getElementById("target1");
const image2 = document.getElementById("target2");

const dot1 = document.getElementById("dot1");
const dots_fired = [
    document.getElementById("dot2"),
    document.getElementById("dot3"),
    document.getElementById("dot4")
];

const previousButton = document.getElementById("previousButton");

let arrow_aimed = [];
let arrows_fired = [];
let currentArrowIndex = 0;

function getMousePos(e, image) {
    // console.log("Client X:"+e.clientX);
    // console.log("Client Y:"+e.clientY);
    return [e.clientX-image.x, e.clientY-image.x];
}


image1.onclick = function(e){
    arrow_aimed[0] = getMousePos(e, image1);
    console.log(arrow_aimed);
    dot1.style.left = arrow_aimed[0][0]+"px";
    dot1.style.top = arrow_aimed[0][1]+"px";
};

image2.onclick = function(e){
    arrows_fired.push(getMousePos(e, image2));
    console.log(arrows_fired);
    dots_fired[currentArrowIndex].style.left = arrow_aimed[0][0]+"px";
    dots[0].style.top = arrow_aimed[0][1]+"px";
};

previousButton.onclick = function(){
    if(currentArrowIndex == 0){
        currentArrowIndex = 2
    } else {
        currentArrowIndex--;
    }
    console.log(currentArrowIndex);
}
