document.addEventListener("DOMContentLoaded", function () {
    let bg = chrome.extension.getBackgroundPage();
    document.getElementById('chanceInput').value = bg.chance * 100;
    document.getElementById('chanceInput').addEventListener("input", function () {
        bg.chance = document.getElementById('chanceInput').value / 100;
    });
});