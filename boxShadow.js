<<<<<<< HEAD
// Box Shadow Generator
const boxshadowCover = document.querySelector(".boxshadow-cover");
const shadowCover = document.querySelector(".shadow-cover");

// Horizontal controls
const horizontalBox = document.getElementById("horizontal-box");
const horizontalLength = document.getElementById("horizontal-length");

// Vertical controls
const verticalBox = document.getElementById("vertical-box");
const verticalLength = document.getElementById("vertical-length");

// Blur controls
const shadowNum = document.getElementById("shadow-num");
const shadowRange = document.getElementById("shadow-range");

// Spread controls
const spreadNum = document.getElementById("spread-num");
const spreadRange = document.getElementById("spread-range");

// Color controls
const shadowColNum = document.getElementById("shadow-col-num");
const bgRange = document.getElementById("bg-range");
const boxcolor = document.getElementById("boxcolor");

// Info displays
const infoShadow = document.querySelector(".info-shadow");
const infoShadow2 = document.querySelector(".info-shadow2");

function updateBoxShadow() {
    const horizontal = horizontalBox.value || "0";
    const vertical = verticalBox.value || "0";
    const blur = shadowNum.value || "0";
    const spread = spreadNum.value || "0";
    const shadowColor = shadowColNum.value || "#bebebe";
    const bgColor = bgRange.value || "#e0e0e0";
    const boxColor = boxcolor.value || "#e0e0e0";

    // Update box shadow
    const boxShadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${shadowColor}`;
    boxshadowCover.style.boxShadow = boxShadow;
    boxshadowCover.style.backgroundColor = boxColor;
    
    // Update background
    const shadowGradient = document.querySelector(".shadowbox-gradient");
    if (shadowGradient) {
        shadowGradient.style.backgroundColor = bgColor;
    }

    // Update info displays
    const cssCode = `box-shadow: ${horizontal}px ${vertical}px ${blur}px ${spread}px ${shadowColor};`;
    const bgCode = `background-color: ${bgColor};`;
    
    if (infoShadow) infoShadow.textContent = cssCode;
    if (infoShadow2) infoShadow2.textContent = bgCode;
}

function syncInputs(numberInput, rangeInput) {
    numberInput.addEventListener("input", () => {
        rangeInput.value = numberInput.value;
        updateBoxShadow();
    });

    rangeInput.addEventListener("input", () => {
        numberInput.value = rangeInput.value;
        updateBoxShadow();
    });
}

// Sync all input pairs
syncInputs(horizontalBox, horizontalLength);
syncInputs(verticalBox, verticalLength);
syncInputs(shadowNum, shadowRange);
syncInputs(spreadNum, spreadRange);

// Color input listeners
shadowColNum.addEventListener("input", updateBoxShadow);
bgRange.addEventListener("input", updateBoxShadow);
boxcolor.addEventListener("input", updateBoxShadow);

function copyShadowCode() {
    const cssCode = infoShadow.textContent + "\n" + infoShadow2.textContent;
    navigator.clipboard.writeText(cssCode).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy CSS code');
    });
}

// Initialize
updateBoxShadow();
=======
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
>>>>>>> 960a3ac4e900cece532e565a1629cc90bb749d96
