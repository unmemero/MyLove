const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const image = document.getElementById('imageFrame');
const images = [];
let imageName = '';
for(let i = 1; i < 105; i++){
    imageName = 'id'+(i)+'.jpg';
    images.push(imageName);
}
let currentImage = 0;
leftButton.addEventListener('click',() => {
    if(currentImage == 0){
        currentImage = images.length-1;
    }
    else{
        currentImage = currentImage - 1;
    }
    image.src = "./images/" + images[currentImage];
});

rightButton.addEventListener('click',() => {
    if(currentImage == images.length-1){
        currentImage = 0;
    }
    else{
        currentImage = currentImage + 1;
    }
    image.src = "./images/"+images[currentImage];
});