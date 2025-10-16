<<<<<<< HEAD
// Loader Generator with Code Output
const loaderElement = document.getElementById("load");
const loaderColor1 = document.getElementById("loader-color1");
const loaderColor2 = document.getElementById("loader-color2");
const loaderSpeed = document.getElementById("loader-speed");
const loaderSize = document.getElementById("loader-size");
const speedValue = document.getElementById("speed-value");
const sizeValue = document.getElementById("size-value");
const animButtons = document.querySelectorAll(".anim-btn");
const loaderHtmlCode = document.getElementById("loader-html-code");
const loaderCssCode = document.getElementById("loader-css-code");

let currentLoader = 1;
let currentAnimation = "linear";

// Loader type selection
const loaderOptions = document.querySelectorAll(".loader-option");
loaderOptions.forEach((option) => {
    option.addEventListener("click", () => {
        loaderOptions.forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
        
        currentLoader = parseInt(option.dataset.loader);
        updateLoaderClass();
        updateLoaderStyles();
        generateLoaderCode();
    });
});

// Animation type selection
animButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        animButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentAnimation = btn.dataset.anim;
        updateLoaderStyles();
        generateLoaderCode();
    });
});

// Size control
loaderSize.addEventListener("input", () => {
    sizeValue.textContent = `${loaderSize.value}px`;
    updateLoaderStyles();
    generateLoaderCode();
});

// Speed control
loaderSpeed.addEventListener("input", () => {
    speedValue.textContent = `${loaderSpeed.value}s`;
    updateLoaderStyles();
    generateLoaderCode();
});

// Color controls
loaderColor1.addEventListener("input", () => {
    updateLoaderStyles();
    generateLoaderCode();
});

loaderColor2.addEventListener("input", () => {
    updateLoaderStyles();
    generateLoaderCode();
});

function updateLoaderClass() {
    loaderElement.className = currentLoader === 1 ? "loader" : `loader${currentLoader}`;
}

function updateLoaderStyles() {
    const color1 = loaderColor1.value;
    const color2 = loaderColor2.value;
    const speed = loaderSpeed.value;
    const size = loaderSize.value;

    document.documentElement.style.setProperty('--primary-color', color1);
    document.documentElement.style.setProperty('--secondary-color', color2);

    const animName = getAnimationName();
    
    if (loaderElement) {
        loaderElement.style.width = `${size}px`;
        loaderElement.style.height = `${size}px`;
        loaderElement.style.animation = `${animName} ${speed}s ${currentAnimation} infinite`;
        
        applyLoaderColors(color1, color2, size);
    }
}

function applyLoaderColors(color1, color2, size) {
    let styleEl = document.getElementById("loader-dynamic-styles");
    if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = "loader-dynamic-styles";
        document.head.appendChild(styleEl);
    }
    
    const borderWidth = Math.max(4, Math.floor(size / 15));
    
    styleEl.textContent = `
        .loader {
            border: ${borderWidth}px solid #f3f3f3;
            border-top: ${borderWidth}px solid ${color1} !important;
        }
        .loader2 {
            border: ${borderWidth}px solid ${color1};
            border-bottom-color: transparent !important;
        }
        .loader3 {
            background: ${color1} !important;
        }
        .loader4::before,
        .loader4::after {
            background: ${color1} !important;
        }
        .loader5::before,
        .loader5::after {
            background: ${color1} !important;
        }
        .loader6::before {
            border-top-color: ${color1} !important;
            border-right-color: ${color2} !important;
        }
    `;
}

function getAnimationName() {
    const animMap = {
        1: "spin",
        2: "spin",
        3: "pulse",
        4: "bounce",
        5: "dot",
        6: "spin"
    };
    return animMap[currentLoader] || "spin";
}

function generateLoaderCode() {
    const color1 = loaderColor1.value;
    const color2 = loaderColor2.value;
    const speed = loaderSpeed.value;
    const size = loaderSize.value;
    const animName = getAnimationName();
    const borderWidth = Math.max(4, Math.floor(size / 15));

    // HTML Code
    const htmlCode = `<div class="loader${currentLoader === 1 ? '' : currentLoader}"></div>`;
    
    // CSS Code
    let cssCode = '';
    
    switch(currentLoader) {
        case 1:
            cssCode = `.loader {
    width: ${size}px;
    height: ${size}px;
    border: ${borderWidth}px solid #f3f3f3;
    border-top: ${borderWidth}px solid ${color1};
    border-radius: 50%;
    animation: spin ${speed}s ${currentAnimation} infinite;
}`;
            break;
        case 2:
            cssCode = `.loader2 {
    width: ${size}px;
    height: ${size}px;
    border: ${borderWidth}px solid ${color1};
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: spin ${speed}s ${currentAnimation} infinite;
}`;
            break;
        case 3:
            cssCode = `.loader3 {
    width: ${size}px;
    height: ${size}px;
    background: ${color1};
    animation: pulse ${speed}s ${currentAnimation} infinite;
}`;
            break;
        case 4:
            cssCode = `.loader4 {
    width: ${size}px;
    height: ${size / 2}px;
    position: relative;
}

.loader4::before,
.loader4::after {
    content: '';
    position: absolute;
    width: ${size / 4}px;
    height: ${size / 4}px;
    background: ${color1};
    animation: bounce ${speed}s ${currentAnimation} infinite;
}

.loader4::before {
    left: 0;
}

.loader4::after {
    right: 0;
    animation-delay: -${speed / 2}s;
}`;
            break;
        case 5:
            cssCode = `.loader5 {
    width: ${size}px;
    height: ${size / 3}px;
    position: relative;
}

.loader5::before,
.loader5::after {
    content: '';
    position: absolute;
    width: ${size / 4}px;
    height: ${size / 4}px;
    border-radius: 50%;
    background: ${color1};
    animation: dot ${speed}s ${currentAnimation} infinite;
}

.loader5::before {
    left: 0;
}

.loader5::after {
    right: 0;
    animation-delay: -${speed / 2}s;
}`;
            break;
        case 6:
            cssCode = `.loader6 {
    width: ${size}px;
    height: ${size}px;
    position: relative;
}

.loader6::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: ${borderWidth}px solid transparent;
    border-top-color: ${color1};
    border-right-color: ${color2};
    animation: spin ${speed}s ${currentAnimation} infinite;
}`;
            break;
    }
    
    // Add keyframes
    cssCode += `\n\n@keyframes ${animName} {`;
    
    if (animName === "spin") {
        cssCode += `
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`;
    } else if (animName === "pulse") {
        cssCode += `
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.7; }
}`;
    } else if (animName === "bounce") {
        cssCode += `
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
}`;
    } else if (animName === "dot") {
        cssCode += `
    0%, 80%, 100% { opacity: 0; }
    40% { opacity: 1; }
}`;
    }
    
    loaderHtmlCode.textContent = htmlCode;
    loaderCssCode.textContent = cssCode;
}

function copyLoaderHTML() {
    copyToClipboard(loaderHtmlCode.textContent, 'HTML');
}

function copyLoaderCSS() {
    copyToClipboard(loaderCssCode.textContent, 'CSS');
}

function copyToClipboard(text, type) {
    navigator.clipboard.writeText(text).then(() => {
        showCopySuccess(event.target, type);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy code');
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

// Initialize
updateLoaderClass();
updateLoaderStyles();
generateLoaderCode();
=======
const loader1 = document.getElementById('load');


const buttonc = document.getElementById('drop1');
const buttond = document.getElementById('drop2');
const buttone = document.getElementById('drop3');
const buttonf = document.getElementById('drop4');
const buttong = document.getElementById('drop5');
const buttonh = document.getElementById('drop6');



function changeLoaderClass(newClass) {
  // Remove all loader classes first
  loader1.className = ''; //resetting class
  
  // Add the new class to loader1
  loader1.classList.add(newClass);
}

// Add event listeners to the buttons
buttonc.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader');
});

buttond.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader2');
});

buttone.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader3');
});

buttonf.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader4');
});

buttong.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader5');
});

buttonh.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader6');
});
>>>>>>> 960a3ac4e900cece532e565a1629cc90bb749d96
