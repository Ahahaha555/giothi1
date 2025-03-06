const lyrics = [
    { time: 0, text: "Giờ thì mình đã không còn thương, không còn đau, không còn vì nhau nữa" },
    { time: 5, text: "Cũng đã từng mang nhiều điều mong ước nhưng đành xa xôi" },
    { time: 10, text: "Bỏ quên những dấu yêu bao ngày ở lại đằng sau" },
    { time: 15, text: "Ta bước tiếp trên đoạn đường chẳng có nhau" },
    { time: 20, text: "Nỗi đau ấy rồi sẽ thay bằng niềm hạnh phúc của riêng mỗi người" },
    { time: 25, text: "Rồi mình sẽ trưởng thành hơn, kiên cường hơn, không còn như lúc trước" },
    { time: 30, text: "Em sẽ dần quên từng đêm khóc nấc trên đôi vai này" },
    { time: 35, text: "Ngày em có đến bên ai trong đời" },
    { time: 40, text: "Thật tâm vẫn chúc em luôn vui cười" },
    { time: 45, text: "Vì anh yêu em rất nhiều, chỉ là chúng ta chọn rời xa" }
];
let index = 0;
function showLyrics() {
    if (index < lyrics.length) {
        document.getElementById("lyrics").innerText = lyrics[index].text;
        index++;
        setTimeout(showLyrics, 5000);
    }
}
document.getElementById("song").addEventListener("play", showLyrics);

function createHeart() {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💔";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}
setInterval(createHeart, 500);
