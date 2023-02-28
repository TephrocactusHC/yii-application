
$(function () {
    $("#btnCopy").click(function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "copy" }, function (response) {
                var win = chrome.extension.getBackgroundPage();
                win.data=response;
                var div = document.getElementById("main");
                var linkTmp = document.createElement("a");
                linkTmp.href = win.data.addr;
                linkTmp.innerText = win.data.info;
                linkTmp.target ="_blank";
                div.appendChild(linkTmp);
                console.log(response);
            });  
        }); 
    });
    $("#btnPaste").click(function () {
        var win = chrome.extension.getBackgroundPage();
        if (win.data) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "paste", data: win.data }, function (response) {
                    console.log(response);
                });
            }); 
        }
    });
});