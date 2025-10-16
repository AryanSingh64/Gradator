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
