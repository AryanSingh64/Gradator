<<<<<<< HEAD
// Linear Gradient Generator
const boxCover = document.querySelector(".box-cover");
const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const color1Range = document.getElementById("color1range");
const color2Range = document.getElementById("color2range");
const angleInput = document.getElementById("angle");
const angleValue = document.getElementById("angle-value");
const infoDisplay = document.querySelector(".info");

function updateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const intensity1 = color1Range.value;
    const intensity2 = color2Range.value;
    const angle = angleInput.value;

    const gradient = `linear-gradient(${angle}deg, ${color1} ${intensity1}%, ${color2} ${intensity2}%)`;
    boxCover.style.background = gradient;

    const cssCode = `background: linear-gradient(${angle}deg, ${color1} ${intensity1}%, ${color2} ${intensity2}%);`;
    infoDisplay.textContent = cssCode;
    
    if (angleValue) {
        angleValue.textContent = `${angle}°`;
    }
}

function copyGradientCode() {
    const cssCode = infoDisplay.textContent;
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

// Event listeners
color1Input.addEventListener("input", updateGradient);
color2Input.addEventListener("input", updateGradient);
color1Range.addEventListener("input", updateGradient);
color2Range.addEventListener("input", updateGradient);
angleInput.addEventListener("input", updateGradient);

// Initialize
updateGradient();
=======
const main = document.querySelector('#nav');
const boxfill = document.querySelector('.box-cover');
const infograd = document.querySelector(".info-gradient");
const navcover = document.querySelector(".nav-total");

const gradientdiv = document.querySelector('#gradient');
const csscode = document.querySelector('.info');

const pxtovh = document.querySelector('#pxInput');
const vhOutput = document.querySelector('#vhOutput');

const pxtovw = document.querySelector('#vwpxInput');
const vwOutput = document.querySelector('#vwOutput');

const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;


function updateGradient(){
const slider = document.getElementById('angle').value;
const col1slider = document.getElementById('color1range').value;
const col2slider = document.getElementById('color2range').value;
const color1 = document.querySelector('#color1').value;
const color2 = document.querySelector('#color2').value;


const gradientCSS = `linear-gradient(${slider}deg, ${color1} ${col1slider}%, ${color2} ${col2slider}%)`;

    if (color1 === "#000000" || color2 === "#000000") {
        navcover.style.color = "white";
    } else {
        navcover.style.color = "#001f3f";
    }

infograd.style.background = gradientCSS;
boxfill.style.background = gradientCSS;
main.style.background = gradientCSS;
csscode.textContent = `background-image:${gradientCSS};
            height: 100vh;
            background-size: cover;
            background-repeat: no-repeat;`;
}



const inputElements = document.querySelectorAll('input[type="range"], input[type="color"]');
inputElements.forEach((input) => {
    input.addEventListener('input', updateGradient);
});

color1.addEventListener('input', updateGradient);
color2.addEventListener('input', updateGradient);

updateGradient();
/*

function updateVhValue() {
    const pxValue = parseFloat(pxtovh.value);
    if(!isNaN(pxValue)) {
        
        const vhValue = (pxValue / viewportHeight) * 100;
        vhOutput.textContent = `${vhValue.toFixed(2)}vh`
    } else {
        vhOutput.textContent = 'Invalid input'
    }
}

//event listener to input field
pxtovh.addEventListener('input', updateVhValue);

updateVhValue();


function updateVwValue() {
    const vwpxValue = parseFloat(pxtovw.value);
    if(!isNaN(vwpxValue)){
        const vwValue = (vwpxValue / viewportWidth) * 100;
        vwOutput.textContent = `${vwValue.toFixed(2)}vw`
    } else {
        vwOutput.textContent = 'Invalid input'
    }
}
pxtovw.addEventListener('input' , updateVwValue);

updateVwValue();*/
>>>>>>> 960a3ac4e900cece532e565a1629cc90bb749d96
