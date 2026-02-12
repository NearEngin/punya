function showSurprise() {
    document.getElementById("surprise").classList.add("show");

    const song = document.getElementById("loveSong");
    song.volume = 0;
    song.play();

    let fade = setInterval(() => {
        if (song.volume < 1) {
            song.volume += 0.05;
        } else {
            clearInterval(fade);
        }
    }, 200);
}



/* Floating Hearts Generator */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);
