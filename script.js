const colorRange = document.getElementById('colorRange');
const colorValue = document.getElementById('colorValue');
const colorBox = document.getElementById('colorBox');

function updateColor() {
    const hue = colorRange.value;
    const color = `hsl(${hue}, 100%, 50%)`;  
    colorValue.textContent = color;
    colorBox.style.backgroundColor = color;

    colorRange.style.setProperty('--thumb-color', color);
    colorRange.style.background = `linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)`;
    colorRange.style.setProperty('--thumb-color', color);

    colorRange.style.setProperty('--webkit-slider-thumb', color);
    const thumbStyles = `::-webkit-slider-thumb{background: ${color};}`;
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(thumbStyles, styleSheet.cssRules.length);
}

colorRange.addEventListener('input', updateColor);

updateColor();