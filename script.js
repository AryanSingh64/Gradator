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
