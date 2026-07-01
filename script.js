//============================
// صفحه لودینگ
//============================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

//============================
// شمارش معکوس
//============================

const weddingDate = new Date("2026-09-15T18:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        document.querySelector(".glass h3").innerHTML = "🎉 مراسم آغاز شده است";

        clearInterval(timer);

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);

//============================
// گوگل مپ
//============================

function openMap() {

    window.open(
        "https://maps.google.com/?q=36.4098124,59.3514624",
        "_blank"
    );

}

//============================
// موسیقی
//============================

const music = document.getElementById("music");

// تلاش برای پخش خودکار
window.addEventListener("load", () => {

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise.catch(() => {

            document.body.addEventListener("touchstart", startMusic, { once: true });

            document.body.addEventListener("click", startMusic, { once: true });

        });

    }

});

function startMusic() {

    music.play();

}

function toggleMusic() {

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}

//============================
// گلبرگ‌های رز
//============================

function createRose() {

    const rose = document.createElement("div");

    rose.className = "rose";

    rose.innerHTML = "🌹";

    rose.style.left = Math.random() * 100 + "vw";

    rose.style.fontSize = (18 + Math.random() * 10) + "px";

    rose.style.animationDuration = (6 + Math.random() * 4) + "s";

    document.body.appendChild(rose);

    setTimeout(() => {

        rose.remove();

    }, 10000);

}

setInterval(createRose, 900);

//============================
// اسکرول
//============================

window.scrollTo({

    top: 0,

    behavior: "smooth"

});

//============================
// کنسول
//============================

console.log("Wedding Invitation | Arzoo ❤️ Navid");