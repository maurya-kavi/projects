
const dClock = document.querySelector(".digital-clock")
const dateD = document.querySelector(".date")

const clock = document.querySelector(".clock")
const hand = document.querySelectorAll(".hand")
const hr = document.querySelector(".hour")
const min = document.querySelector(".minute")
const sec = document.querySelector(".second")

function check(i) {
    if (i < 10) { i = "0" + i }
    return i
}

for (let i = 1; i <= 12; i++) {
    const numberDiv = document.createElement("div");
    numberDiv.classList.add("number");
    const angle = i * 30; // 360° / 12 = 30°
    numberDiv.style.setProperty("--rotation", `${angle}deg`);
    numberDiv.innerHTML = `<span>${i}</span>`;
    clock.appendChild(numberDiv);
  }

function updateClock() {
    const d = new Date()
    const h = check(d.getHours())
    const m = check(d.getMinutes())
    const s = check(d.getSeconds())
    dClock.innerHTML = h + ":" + m + ":" + s

    dateD.innerHTML = d.toDateString()

    const sDeg = s * 6
    const mDeg = m * 6 + s * 0.1
    const hDeg = (h % 12) * 30 + m * 0.5

    // hand = sDeg
    sec.style.transform = `translateX(-50%) rotate(${sDeg}deg)`;
    min.style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
    hr.style.transform = `translateX(-50%) rotate(${hDeg}deg)`;

}

setInterval(updateClock, 1000)
updateClock() // initial call to avoid 1 s delay




