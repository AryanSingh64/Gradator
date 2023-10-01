const box = document.querySelector(".boxshadow-cover");
const boxShadowGen = document.querySelector("#Box-Shadow");
const horbox = document.querySelector('#horizontal-box');
const verbox = document.querySelector('#horizontal-length');
const verhorbox = document.querySelector('#vertical-box');
const ververbox = document.querySelector('#vertical-length');
const shadownumbox = document.querySelector('#shadow-num');
const shadowrangebox = document.querySelector('#shadow-range');
const spreadnum = document.querySelector('#spread-num');
const spreadrange = document.querySelector('#spread-range');
const shadowcolnum = document.querySelector('#shadow-col-num');
const boxcolor = document.querySelector('#boxcolor');
const bgrange = document.querySelector('#bg-range');
const info = document.querySelector(".info-shadow");
const info2 = document.querySelector(".info-shadow2");
/*const info1 = document.querySelector('#imptxt2');*/
const links = document.querySelector('.links');



function updateShadow() {
    const shadowValue = verbox.value;
    const verticalValue = ververbox.value;
    const blurValue = shadowrangebox.value;
    const spreadValue = spreadrange.value;
    const shadowcolValue = shadowcolnum.value;
    const bgValue = bgrange.value;
    const boxcol = boxcolor.value;

    




    const boxShadow = `${shadowValue}px ${verticalValue}px ${blurValue}px ${spreadValue}px ${shadowcolValue}`;
    const bgCol = `${bgValue}`



    info.textContent = `box-shadow:${boxShadow};`;
    info.style.textTransform = 'lowercase';
    info2.textContent = `background:${bgCol};`;
    info2.style.textTransform = "lowercase";
    box.style.boxShadow = boxShadow;
    box.style.backgroundColor = boxcol;
    boxShadowGen.style.backgroundColor = bgCol;
    
}

verbox.addEventListener('input', updateShadow);
ververbox.addEventListener('input', updateShadow);
shadowrangebox.addEventListener('input', updateShadow);
spreadrange.addEventListener('input', updateShadow);
shadowcolnum.addEventListener('input', updateShadow);
bgrange.addEventListener('input', updateShadow);
boxcolor.addEventListener('input', updateShadow);



// Add event listeners to both inputs
horbox.addEventListener('input', () => {
    const shadowValue = horbox.value;
    verbox.value = shadowValue; // Update the range input

    updateShadow();
});
verhorbox.addEventListener('input', () => {
    const verticalValue = verhorbox.value;
    ververbox.value = verticalValue; // Update the number input
    updateShadow();
});
shadownumbox.addEventListener('input', () => {
    const blurValue = shadownumbox.value;
    shadowrangebox.value = blurValue; // Update the number input
    updateShadow();
});
spreadnum.addEventListener('input', () => {
    const spreadValue = spreadnum.value;
    spreadrange.value = spreadValue; // Update the number input
    updateShadow();
});







verbox.addEventListener('input', () => {
    const shadowValue = verbox.value;
    horbox.value = shadowValue; // Update the number input
    updateShadow();
});
ververbox.addEventListener('input', () => {
    const verticalValue = ververbox.value;
    verhorbox.value = verticalValue; // Update the number input
    updateShadow();
});
shadowrangebox.addEventListener('input', () => {
    const blurValue = shadowrangebox.value;
    shadownumbox.value = blurValue; // Update the number input
    updateShadow();
});
spreadrange.addEventListener('input', () => {
    const spreadValue = spreadrange.value;
    spreadnum.value = spreadValue; // Update the number input
    updateShadow();
});


// Initial update
updateShadow();
/*
function openSlider() {
    links.style.right = '0';
}

function cutSlider(){
    links.style.right='-50%' ;  
}*/
