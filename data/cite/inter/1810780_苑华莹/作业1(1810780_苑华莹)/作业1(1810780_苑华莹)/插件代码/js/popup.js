var bg = chrome.extension.getBackgroundPage();
var getHtml = document.getElementsByTagName("html")[0];
var getClock = document.getElementById("img");
var getImg = document.getElementById("clock");
var progressbar = document.getElementById("progressbar");
var light = bg.checklight();
var check = document.getElementById("toggle");
var flowerwidth = bg.getflowerwidth();
getClock.style.width = flowerwidth + "%";

if (!light) {
    getImg.innerText = `呜呼啦呼，时间暂停!`;
    check.checked = true;
    getHtml.id = "htmlbg2";
    progressbar.id = "progressbar2";
}

var WandH = bg.getWandH();
getHtml.style.width = WandH.winWidth * 1 / 5 + "px";
getHtml.style.height = WandH.winHeight * 1 / 7 + "px";
console.log(getHtml.style.width);

getClock.style.left = `${bg.timer() - 10}%`;

if (Math.floor(bg.timer() * 36 / 60) == 60) {
    getImg.innerText = `亲爱的，要注意休息眼睛哦~`;
    //getClock.src = "../img/dead.png";
}

document.getElementsByClassName("bar")[0].style.width = `${bg.timer()}%`;

document.getElementById("water").addEventListener("click", function (e) {
    bg.water();
    if (!light) {
        getClock.style.width = flowerwidth - 2 + "%";
        bg.smallflower();
        flowerwidth = flowerwidth - 2;
    } else {
        getClock.style.width = flowerwidth + 2 + "%";
        bg.flowerbecomefat();
        flowerwidth = flowerwidth + 2;
    }
    getClock.src = "../img/flower.png";
    getImg.innerText = `亲爱的，要注意休息眼睛哦~`;
    getClock.style.left = `-10%`;
    document.getElementsByClassName("bar")[0].style.width = `0%`;
});
document.getElementById("sun").addEventListener("click", function (e) {
    bg.turnlight();
    light = !light;
    if (bg.checklight()) {
        getImg.innerText = ``;
        check.checked = false;
        getHtml.id = "htmlbg";
        progressbar.id = "progressbar";
    } else {
        getImg.innerText = `呜呼啦呼，时间暂停！`;
        check.checked = true;
        getHtml.id = "htmlbg2";
        progressbar.id = "progressbar2";
    }
});