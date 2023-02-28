var flag = {
    begin : 0,
    change : 0
};//当前未开始
/*var d = new Date();
console.log(d.toLocaleString());*/
setInterval(function(){
    var pop = chrome.extension.getViews({type:'popup'})[0];
    if (pop) {
        console.log(pop.b);
    }
}, 1000)
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    setInterval(function(){
        if (flag.change) {
            var cab = chrome.tabs.connect(tabId);
            cab.postMessage({ flag: flag.begin});
            /*chrome.tabs.connect(tabId);
            chrome.tabs.sendMessage(tabId, { greeting: "hello"});*/
            flag.change = 0;
        }
    },100);
});
/*//接收消息
chrome.extension.onConnect.addListener(function(bac) {
    bac.onMessage.addListener(function(msg) {
        console.log(msg.joke);
    })
})*/
//发消息
/*chrome.tabs.query({active:true}, function(tab) {
    chrome.tabs.sendMessage(tab.id, { greeting: "hello"}, 
        function(response) {
            console.log(response.farewell)
        });
}) */
/*chrome.tabs.query({active:true}, function(tab) {
    setInterval(function(){
    console.log(tab.id)

},1000)
    // chrome.tabs.connect(tab.id, {name: "knockknock"})
})*/