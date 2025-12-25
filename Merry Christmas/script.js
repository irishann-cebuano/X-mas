
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.innerHTML = "❄";
  snowflake.style.position = "fixed";
  snowflake.style.top = "-10px";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = Math.random() * 20 + 10 + "px";
  snowflake.style.opacity = Math.random();
  snowflake.style.color = "white";

  document.body.appendChild(snowflake);

  let fallSpeed = Math.random() * 3 + 1;

  function fall() {
    snowflake.style.top =
      snowflake.offsetTop + fallSpeed + "px";

    if (snowflake.offsetTop > window.innerHeight) {
      snowflake.remove();
    } else {
      requestAnimationFrame(fall);
    }
  }
  fall();
}

setInterval(createSnowflake, 200);


const giftBtn = document.querySelector(".btn");
const giftDiv = document.getElementById("gift");

giftBtn.addEventListener("click", () => {
  giftDiv.style.display = "block";
  giftBtn.style.display = "none";
});


const music = document.getElementById("bg-music");
music.volume = 0.2;


const playBtn = document.getElementById("play-music");
playBtn.addEventListener("click", () => {
  music.play();
  playBtn.style.display = "none";
});


const muteBtn = document.getElementById("mute-btn");
muteBtn.addEventListener("click", () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇 Unmute" : "🔊 Mute";
});
