let myExample = document.getElementById('Example');
let myText = document.getElementById('text');
let myFonsiz1 = document.getElementById('font1');
let myFonsiz0 = document.getElementById('font0');
let myBorder1 = document.getElementById('Border1');
let myBorder0 = document.getElementById('Border0');
let myHeight1 = document.getElementById('height1');
let myHeight0 = document.getElementById('height0');
let myWidth1 = document.getElementById('width1');
let myWidth0 = document.getElementById('width0');
let mybiti = document.getElementById('biti');
let mybite = document.getElementById('bite');






myFonsiz1.addEventListener('click', function () {
    let currentSize = parseInt(window.getComputedStyle(myText).fontSize);
    let newSize = currentSize + 5;
    myText.style.fontSize = newSize + 'px';
});


myFonsiz0.addEventListener('click', function () {
    let currentSize = parseInt(window.getComputedStyle(myText).fontSize);
    let newSize = currentSize - 5;
    myText.style.fontSize = newSize + 'px';
});


myBorder1.addEventListener('click', function () {
    increaseBorderRadius();
});
function increaseBorderRadius() {
    const currentRadius = parseInt(window.getComputedStyle(myExample).borderRadius);
    const newRadius = currentRadius + 5;
    myExample.style.borderRadius = newRadius + 'px';
}


myBorder1.addEventListener('click', increaseBorderRadius);
myBorder0.addEventListener('click', decreaseBorderRadius);




function increaseBorderRadius() {
    const currentRadius = parseInt(window.getComputedStyle(myExample).borderRadius);
    const newRadius = currentRadius + 5;

    myExample.style.borderRadius = newRadius + 'px';
}



function decreaseBorderRadius() {
    const currentRadius = parseInt(window.getComputedStyle(myExample).borderRadius);
    const newRadius = Math.max(0, currentRadius - 5);
    myExample.style.borderRadius = newRadius + 'px';
}




myHeight1.addEventListener('click', increaseHeight);
myHeight0.addEventListener('click', decreaseHeight);



function increaseHeight() {
    const currentHeight = parseInt(window.getComputedStyle(myExample).height);
    const newHeight = currentHeight + 5;
    myExample.style.height = newHeight + 'px';
}



function decreaseHeight() {
    const currentHeight = parseInt(window.getComputedStyle(myExample).height);
    const newHeight = Math.max(0, currentHeight - 5);
    myExample.style.height = newHeight + 'px';
}



myWidth1.addEventListener('click', increaseWidth);
myWidth0.addEventListener('click', decreaseWidth);

function increaseWidth() {
    const currentWidth = parseInt(window.getComputedStyle(myExample).width);
    const newWidth = currentWidth + 5;
    myExample.style.width = newWidth + 'px';
}

function decreaseWidth() {
    const currentWidth = parseInt(window.getComputedStyle(myExample).width);
    const newWidth = Math.max(0, currentWidth - 5);
    myExample.style.width = newWidth + 'px';
}



let textcolorPicker = document.getElementById('textcolorPicker');
textcolorPicker.addEventListener('input', changeTextColor);
function changeTextColor() {
    let selectedColor = textcolorPicker.value;
    myText.style.color = selectedColor;
}



let backgroundColorPicker = document.getElementById('bgcolorPicker');
backgroundColorPicker.addEventListener('input', changeBackgroundColor);
function changeBackgroundColor() {
    let selectedColor = backgroundColorPicker.value;
    myExample.style.backgroundColor = selectedColor;
}




















// function changeFontSize(targetsf) {
//     // Hedef düymənin ID-sini əldə et
//     const targetButton = document.getElementById(targetsf);

//     // Hedef düymənin font ölçüsünü dəyiş
//     const currentSize = parseInt(window.getComputedStyle(targetButton).fontSize);
//     const newSize = currentSize + 2; // Əlavə edilən ölçü

//     targetButton.style.fontSize = newSize + 'px';
// }
