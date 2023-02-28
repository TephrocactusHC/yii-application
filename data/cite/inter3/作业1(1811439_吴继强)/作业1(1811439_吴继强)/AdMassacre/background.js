chrome.runtime.onMessage.addListener(
    function (count, sender, sendResponse) {
        chrome.browserAction.setBadgeBackgroundColor({
            color: '#00F'
        });

        chrome.browserAction.setBadgeText({
            text: count.toString()
        });

        chrome.browserAction.setTitle({
            title: 'It has eliminated ' + count + ' advertisement(s)'
        });
    }
);