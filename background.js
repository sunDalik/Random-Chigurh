var chance = 0.001; //0.1%
var deployChigurhs = `var chance = 0;
                chrome.extension.onMessage.addListener(request => {
                    chance = request.data;
                    const chigurhImg = chrome.extension.getURL("images/chigurh.jpg");
                    for (let img of document.getElementsByTagName('img')) {
                        if (Math.random() < chance) {
                            img.src = chigurhImg;
                            img.srcset = chigurhImg;
                        }
                    }
                    for (let element of document.getElementsByTagName("*")) {
                        if (element.style.backgroundImage !== "" && Math.random() < chance) {
                            element.style.backgroundImage = "url(" + chigurhImg + ")";
                        }
                    }
                })`;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(tab.id, {code: deployChigurhs});
        chrome.tabs.sendMessage(tab.id, {data: chance});
    }
});
