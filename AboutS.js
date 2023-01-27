var images = ['cafe1.jpg', 'cafe2.jpg', 'cafe3.jpg'],
    index = 0,
    maxImages = images.length - 1;

var timer = setInterval(function() {
    var curImage = images[index];
    index = (index == maxImages) ? 0 : ++index;
    $('div.slide img').attr('src', 'photos/' + curImage);
}, 1900);

var menu_items = document.querySelectorAll(".menu");


Array.from(menu_items).forEach(function(menu) {
    menu.addEventListener("click", function() {
        this.classList.toggle("active")
    });
});

var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
    index = 0,
    maxImages = images.length - 1;

var timer = setInterval(function() {
    var curImage = images[index];
    index = (index == maxImages) ? 0 : ++index;
    $('div.slide1 img').attr('src', 'photos/' + curImage);
}, 1900);

let team = document.getElementById("team-inf");
let Hscreen = document.getElementsByClassName("hover-screen")[0];
console.dir(Hscreen);
document.addEventListener("click", element => {
    console.dir(element)
    if (element.target.className.includes("hover-screen")) {
        team.style.transform = "translate(0, 0%) "
    }
    if (element.target.id === "close") {

        team.style.transform = "translate(0, 100%) "

    }
})
