// Background Animation Generator with Code Output
const bubblesDiv = document.querySelector(".bg-preview-container .bubbles");
const spanElements = bubblesDiv ? bubblesDiv.querySelectorAll("span") : [];
const spanElementseven = bubblesDiv ? bubblesDiv.querySelectorAll(".bubbles span:nth-child(even)") : [];

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

const trian = document.querySelector(".bg-preview-container .coverarrow");
const trianelements = trian ? trian.querySelectorAll("span") : [];
const trianelementseven = trian ? trian.querySelectorAll(".coverarrow span:nth-child(even)") : [];

const button = document.querySelector('#change');
const bgHtmlCode = document.getElementById("bg-html-code");
const bgCssCode = document.getElementById("bg-css-code");
const bgPreviewContainer = document.querySelector(".bg-preview-container");

let isBubbleMode = true;

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
    const animationduration = `${bAnim}s`;

    const bshblue = `0 0 0 10px ${bsblue}, 0 0 50px ${bsblue1}, 0 0 50px ${bsblue1}`;
    const bshred = `0 0 0 10px ${bsred}, 0 0 50px ${bsred1}, 0 0 100px ${bsred1}`;

    // Update preview container background
    if (bgPreviewContainer) {
        bgPreviewContainer.style.backgroundColor = bbg;
    }

    // Update bubble animations
    spanElements.forEach((span) => {
        span.style.width = width;
        span.style.height = height;
        span.style.borderRadius = borderradius;
        span.style.backgroundColor = bgblue;
        span.style.animationDuration = `calc(${animationduration} / var(--i))`;
        span.style.boxShadow = bshblue;
    });

    spanElementseven.forEach((span) => {
        span.style.backgroundColor = bgred;
        span.style.boxShadow = bshred;
    });

    // Update arrow animations
    const coverarrowuo = document.querySelector(".bg-preview-container .coverarrowuo");
    if (coverarrowuo) {
        coverarrowuo.style.backgroundColor = bbg;
    }

    trianelements.forEach((span) => {
        span.style.borderRight = `${width} solid transparent`;
        span.style.borderLeft = `${width} solid transparent`;
        span.style.borderBottom = `${height} solid ${bgblue}`;
        span.style.animationDuration = `calc(${animationduration} / var(--i))`;
        span.style.filter = `drop-shadow(0px 0px 0.75em ${bsblue})`;
    });

    trianelementseven.forEach((span) => {
        span.style.borderBottom = `${height} solid ${bgred}`;
    });

    updateValueDisplays();
    generateBgCode();
}

function updateValueDisplays() {
    const displays = document.querySelectorAll('.bubble-controls .value-display');
    if (displays.length >= 4) {
        displays[0].textContent = `${bubbleWidth.value}vw`;
        displays[1].textContent = `${bubbleHeight.value}vh`;
        displays[2].textContent = `${bubbleRadius.value}vw`;
        displays[3].textContent = `${bubbleAnim.value}s`;
    }
}

function togglediv() {
    isBubbleMode = !isBubbleMode;
    
    const bubblesContainer = document.querySelector(".bg-preview-container .bubbles");
    const trianglesContainer = document.querySelector(".bg-preview-container .coverarrowuo");
    const radiusLabel = document.querySelector('.radius-label');
    
    if (!isBubbleMode) {
        // Switch to triangles
        if (bubblesContainer) {
            bubblesContainer.style.display = "none";
        }
        if (trianglesContainer) {
            trianglesContainer.style.display = "block";
        }
        
        // Hide bubble radius control
        if (radiusLabel) {
            radiusLabel.style.display = 'none';
            const radiusInput = document.querySelector('#bubble-radius');
            const radiusValue = radiusLabel.nextElementSibling;
            if (radiusInput) radiusInput.style.display = 'none';
            if (radiusValue && radiusValue.classList.contains('value-display')) {
                radiusValue.style.display = 'none';
            }
        }
        
        if (button) button.textContent = "Switch to Bubbles";
    } else {
        // Switch to bubbles
        if (bubblesContainer) {
            bubblesContainer.style.display = "flex";
        }
        if (trianglesContainer) {
            trianglesContainer.style.display = "none";
        }
        
        // Show bubble radius control
        if (radiusLabel) {
            radiusLabel.style.display = 'block';
            const radiusInput = document.querySelector('#bubble-radius');
            const radiusValue = radiusLabel.nextElementSibling;
            if (radiusInput) radiusInput.style.display = 'block';
            if (radiusValue && radiusValue.classList.contains('value-display')) {
                radiusValue.style.display = 'inline-block';
            }
        }
        
        if (button) button.textContent = "Switch to Triangles";
    }
    
    generateBgCode();
}

function generateBgCode() {
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
    
    // HTML Code
    const htmlCode = `<div class="bg-animation">
    <div class="${isBubbleMode ? 'bubbles' : 'triangles'}">
        <span style="--i:11"></span>
        <span style="--i:12"></span>
        <span style="--i:24"></span>
        <span style="--i:10"></span>
        <span style="--i:16"></span>
        <span style="--i:18"></span>
        <span style="--i:13"></span>
        <span style="--i:7"></span>
        <span style="--i:20"></span>
        <span style="--i:35"></span>
        <!-- Add more spans as needed -->
    </div>
</div>`;
    
    // CSS Code
    let cssCode = `.bg-animation {
    position: relative;
    width: 100%;
    height: 100vh;
    background: ${bbg};
    overflow: hidden;
}

.${isBubbleMode ? 'bubbles' : 'triangles'} {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-end;
}

.${isBubbleMode ? 'bubbles' : 'triangles'} span {
    position: relative;
`;

    if (isBubbleMode) {
        cssCode += `    width: ${bwidthValue}vw;
    height: ${bheightValue}vh;
    background: ${bgblue};
    border-radius: ${bRadius}vw;
    box-shadow: 0 0 0 10px ${bsblue},
                0 0 50px ${bsblue1},
                0 0 50px ${bsblue1};
`;
    } else {
        cssCode += `    width: 0;
    height: 0;
    border-left: ${bwidthValue}vw solid transparent;
    border-right: ${bwidthValue}vw solid transparent;
    border-bottom: ${bheightValue}vh solid ${bgblue};
    filter: drop-shadow(0px 0px 0.75em ${bsblue});
`;
    }

    cssCode += `    animation: animate calc(${bAnim}s / var(--i)) linear infinite;
}

.${isBubbleMode ? 'bubbles' : 'triangles'} span:nth-child(even) {
`;

    if (isBubbleMode) {
        cssCode += `    background: ${bgred};
    box-shadow: 0 0 0 10px ${bsred},
                0 0 50px ${bsred1},
                0 0 100px ${bsred1};
`;
    } else {
        cssCode += `    border-bottom-color: ${bgred};
`;
    }

    cssCode += `}

@keyframes animate {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) rotate(720deg);
        opacity: 0;
    }
}`;
    
    bgHtmlCode.textContent = htmlCode;
    bgCssCode.textContent = cssCode;
}

function copyBgHTML() {
    navigator.clipboard.writeText(bgHtmlCode.textContent).then(() => {
        showCopySuccess(event.target, 'HTML');
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy HTML code');
    });
}

function copyBgCSS() {
    navigator.clipboard.writeText(bgCssCode.textContent).then(() => {
        showCopySuccess(event.target, 'CSS');
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy CSS code');
    });
}

function showCopySuccess(btn, type) {
    const originalText = btn.textContent;
    btn.textContent = `${type} Copied!`;
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
}

// Event listeners
if (bubbleWidth) bubbleWidth.addEventListener("input", updateAnimations);
if (bubbleHeight) bubbleHeight.addEventListener("input", updateAnimations);
if (bubbleRadius) bubbleRadius.addEventListener("input", updateAnimations);
if (bubbleAnim) bubbleAnim.addEventListener("input", updateAnimations);
if (bubbleblue) bubbleblue.addEventListener("input", updateAnimations);
if (bubblered) bubblered.addEventListener("input", updateAnimations);
if (bshadowblue) bshadowblue.addEventListener("input", updateAnimations);
if (bshadowblue1) bshadowblue1.addEventListener("input", updateAnimations);
if (bshadowred) bshadowred.addEventListener("input", updateAnimations);
if (bshadowred1) bshadowred1.addEventListener("input", updateAnimations);
if (bubblebg) bubblebg.addEventListener("input", updateAnimations);
if (button) button.addEventListener("click", togglediv);

// Initialize
updateAnimations();
