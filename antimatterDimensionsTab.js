var antimatterDimensionsTabClass = ".l-antimatter-dim-tab";

function getAntimatterDimensionsTab() {
    return document.querySelector(antimatterDimensionsTabClass);
}

function getAntimatterDimensions() {
    var tab = getAntimatterDimensionsTab();
    return tab.querySelector(".l-dimensions-container");
}

function getTickspeed() {
    var tab = getAntimatterDimensionsTab();
    return tab.querySelector(".l-tickspeed-container");
}

function getDimBoost() {
    var tab = getAntimatterDimensionsTab();
    return tab.querySelector(".dimboost");
}

function getGalaxy() {
    var tab = getAntimatterDimensionsTab();
    return tab.querySelector(".galaxy");
}

function clickAllChildren(parent) {
    var children = parent.childNodes;
    for (var i = 0; i < children.length; i++) {
        if(children[i].click) children[i].click();
        clickAllChildren(children[i]);
    }
}

function antimatterDimensionsClickCycle() {
    //order: galaxy, dimboost, tickspeed, dimensions
    clickAllChildren(getGalaxy());
    clickAllChildren(getDimBoost());
    clickAllChildren(getTickspeed());
    clickAllChildren(getAntimatterDimensions());
}

async function firstInfinityTas() {
    while(player.antimatter.lt("1.7976931348623157e308")) {
        antimatterDimensionsClickCycle();
        await new Promise(r => setTimeout(r, 1));
    }
}

let start = Date.now();
await firstInfinityTas();
let timeTaken = Date.now() - start;
console.log("done in " + timeTaken + "ms");