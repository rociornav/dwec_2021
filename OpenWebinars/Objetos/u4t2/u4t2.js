let images = document.querySelectorAll("div");
console.log(images);

let show = (e) => {
    console.log(e);
    e.target.style.backgroundColor = "green";
    e.target.querySelector("img").style.visibility = "visible";
}

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", show);
}