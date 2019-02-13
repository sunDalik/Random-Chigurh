var chance = 0.001; //0.1%
var deployChigurhs = `var chance = 0;
            chrome.extension.onMessage.addListener(request => {
                chance = request.data;
                let images = document.getElementsByTagName("img");
                for (var i = 0; i < images.length; i++) {
                    if (Math.random() < chance) {
                        images[i].src = chrome.extension.getURL("images/chigurh.jpg");
                    }
                }
            })`;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(tab.id, {code: deployChigurhs});
        chrome.tabs.sendMessage(tab.id, {data: chance});
    }
});