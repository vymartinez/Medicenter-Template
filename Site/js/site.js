window.onload = function() {
    document.querySelector(".menumobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == "flex") {
            document.querySelector(".menu nav ul").style.display = "none";
        } else {
            document.querySelector(".menu nav ul").style.display = "flex";
        }
    });
}

window.onresize = function() {
    if(window.innerWidth > 650) {
        document.querySelector(".menu nav ul").style.display = "flex";
    } else {
        document.querySelector(".menu nav ul").style.display = "none";
    }
}