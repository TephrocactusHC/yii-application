var count = 0;
var winWidth = 1440;
var winHeight = 860;
var notificationId;
var countdownId = 0;
var light = true;
var flowerwidth = 10;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    winWidth = request.winWidth;
    winHeight = request.winHeight;
});

function flowerbecomeslim() {
    flowerwidth = flowerwidth - 4;
}

function flowerbecomefat() {
    flowerwidth = flowerwidth + 2;
}

function smallflower() {
    flowerwidth = flowerwidth - 2;
}

function getflowerwidth() {
    return flowerwidth;
}

function checklight() {
    return light
}

function turnlight() {
    light = !light;
}
function timer() {
    if (!light) {
        return count / 36
    }
    if (count < 3600) {
        count++;
        chrome.browserAction.setBadgeText({
            text: Math.floor(count / 60) + ''
        });
        chrome.browserAction.setBadgeBackgroundColor({
            color: "#70d2c9"
        });
    }
    if (count == 3600) {
        flowerbecomeslim();
        notificationAction();
        count++;
    }
    if (count >= 3600) {
        chrome.browserAction.setBadgeText({
            text: 'sos'
        });
        chrome.browserAction.setBadgeBackgroundColor({
            color: [255, 0, 0, 255]
        });
    }
    return count / 36
}

function water() {
    count = 0;
    window.clearInterval(countdownId);
}

var fivemin = 0;
var Countdown = function () {
    fivemin++;
    if (fivemin == 300) {
        notificationAction();
        fivemin = 0;
    }
};

function notificationAction() {
    chrome.notifications.clear("1", (id) => {});
    chrome.notifications.create("1", {
        type: 'basic',
        iconUrl: 'img/logo.png',
        title: '我们快来休息眼睛吧啦！',
        buttons: [{
            title: "现在就去",
            iconUrl: 'img/yellowsmile.png'
        }, {
            title: "等会儿哟",
            iconUrl: 'img/redsmile.png'
        }],
        message: '已经一个小时没休息眼睛了，眼镜片又厚了0.1mm！呜呜呜~~~'
    });
}

chrome.notifications.onButtonClicked.addListener(function (id, btnIndex) {
    count = btnIndex ? count : 0;
});

function getWandH() {
    var WandH = {
        winWidth: winWidth,
        winHeight: winHeight
    }
    return WandH
}

setInterval(timer, 1000);