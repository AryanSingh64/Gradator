const coverbubble = document.querySelector("#bganimations");
const bubblesDiv = document.querySelector(".bubbles");
const spanElements = bubblesDiv.querySelectorAll("span");
const spanElementseven = bubblesDiv.querySelectorAll(".bubbles span:nth-child(even)"
);
console.log(spanElementseven)

const bubbleWidth = document.querySelector("#bubble-width");
const bubbleHeight = document.querySelector("#bubble-height");

const bubbleRadius = document.querySelector("#bubble-radius");
const bubbleAnim = document.querySelector("#bubble-anim");

const bubbleblue = document.querySelector("#bubble-blue");
const bubblered = document.querySelector("#bubble-red");

const bshadowblue = document.querySelector("#bubble-shadow-blue");
const bshadowblue1 = document.querySelector("#bubble-shadow-blue1");

const bshadowred = document.querySelector("#bubble-shadow-red");
const bshadowred1 = document.querySelector("#bubble-shadow-red1");

const bubblebg = document.querySelector("#bubble-bg");



const trian = document.querySelector(".coverarrow");
const trianelements = trian.querySelectorAll(".coverarrow span");
const trianelementseven = bubblesDiv.querySelectorAll(
  ".coverarrow span:nth-child(even)"
);
//button
const button = document.querySelector('#change')



let isVisible = false;
function updateAnimations() {
    const bwidthValue = bubbleWidth.value;
    const bheightValue = bubbleHeight.value;

    const bRadius = bubbleRadius.value;
    const bAnim = bubbleAnim.value;

    const bgblue = bubbleblue.value;
    const bgred = bubblered.value;

    const bsblue = bshadowblue.value;
    const bsblue1 = bshadowblue1.value;

    const bsred = bshadowred.value;
    const bsred1 = bshadowred1.value;

    const bbg = bubblebg.value;
    

    const width = `${bwidthValue}vw`;
    const height = `${bheightValue}vh`;

    const borderradius = `${bRadius}vw`;
    const animationduration = `${bAnim}`;


    const bshblue = `0 0 0 10px ${bsblue},
    0 0 50px ${bsblue1},
    0 0 50px ${bsblue1}`;

    const bshred = `0 0 0 10px ${bsred},
    0 0 50px ${bsred1},
    0 0 100px ${bsred1}`;


    
    coverbubble.style.backgroundColor = bbg;

    spanElements.forEach((span) => {
        span.style.width = width;
        span.style.height = height;
        span.style.borderRadius = borderradius;
        span.style.backgroundColor = bgblue;
        span.style.animationDuration = `calc(${animationduration}s / var(--i))`;
        span.style.boxShadow = bshblue;
    });
    spanElementseven.forEach((span) => {
        span.style.width = width;
        span.style.height = height;
        span.style.borderRadius = borderradius;
        span.style.background = bgred;
        span.style.animationDuration = `calc(${animationduration}s / var(--i))`;
        span.style.boxShadow = bshred;


    });

    document.querySelector(".coverarrowuo").style.backgroundColor = bbg;
    trianelements.forEach((span) => {
        span.style.borderRight = `${width} solid transparent`;
        span.style.borderLeft = `${width} solid transparent`;
        span.style.animationDuration = `calc(${animationduration}s / var(--i))`;
        
        span.style.borderBottom = `${height} solid ${bgblue}`;
        span.style.filter = `drop-shadow(0px 0px .75em ${bsblue})`;
    
    });

     trianelementseven.forEach((span) => {
        span.style.borderBottom = `${height} solid ${bgred}`;
     });
    
}

function togglediv() {
    if (isVisible) {
        bubblesDiv.style.display = "flex";
        bubblesDiv.style.zIndex = "10";
        trian.style.zIndex = "-10";
        bshadowblue1.style.display = "block"
        bshadowred1.style.display = "block"
        trian.style.display = "none";
        bubbleRadius.style.display = "block";
    } else {
        bubblesDiv.style.display = "none";
        trian.style.display = 'flex';
        bubblesDiv.style.zIndex = "-10";
        trian.style.zIndex = "10";
        bubbleRadius.style.display = "none";
        bshadowblue1.style.display = "none";
        bshadowred1.style.display = "none";
        
    }

    isVisible = !isVisible;
}

bubbleWidth.addEventListener("input", updateAnimations);
bubbleHeight.addEventListener("input", updateAnimations);
bubbleRadius.addEventListener("input", updateAnimations);
bubbleAnim.addEventListener("input", updateAnimations);
bubbleblue.addEventListener("input", updateAnimations);
bubblered.addEventListener("input", updateAnimations);
bshadowblue.addEventListener("input", updateAnimations);
bshadowblue1.addEventListener("input", updateAnimations);
bshadowred.addEventListener("input", updateAnimations);
bshadowred1.addEventListener("input", updateAnimations);
bubblebg.addEventListener("input", updateAnimations);
button.addEventListener("click", togglediv);



updateAnimations(); 
