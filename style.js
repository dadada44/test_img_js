let addImage = document.getElementById("addImage");
i = 0

addImage.addEventListener("click", function(){

    let imageUrl = document.getElementById("imageUrl").value;
    let imageContainer = document.getElementById("imageContainer");

    imageContainer.innerHTML = '';

    let img = document.createElement("img");
    img.src = imageUrl;
    imageContainer.appendChild(img);

    console.log("Vymnena obrazku:", (i+1));
    i = i+1;
})










