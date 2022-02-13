let time = 2000,
    currentImageIndex = 0, 
    imagens = ducument.querySelectorAll("img.img")
    max = image.lenght;

function nextImage() {

    imagens[currentImageIndex]
        .classList.remove("img")

    currentImageIndex++

    if(currentImage >= max)
        currentImage = 0 

    imagens[currentImageIndex]
        .classList.add("img")
}

function start() {
    setInterval(() => {

    }, time)
}

window.addEventListener("load", start)


