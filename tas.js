// Functions
function clickButtonByClass(classname) {
    document.querySelector(classname).click();
}

function clickAllChildren(parent) {
    var children = parent.childNodes;
    for (var i = 0; i < children.length; i++) {
        if(children[i].click) children[i].click();
        clickAllChildren(children[i]);
    }
}

function clickAllButtonsByClass(classname) {
    var buttons = document.querySelectorAll(classname);
    for (var i = 0; i < buttons.length; i++) {
        if(buttons[i].click) buttons[i].click();
        clickAllChildren(buttons[i]);
    }
}

function maxAll() {
    var classname = ".o-primary-btn.l-button-container";
    clickAllButtonsByClass(classname);
}

function clickAntimatterDimensions() {
    var classname = ".l-dimensions-container.l-antimatter-dim-tab";
    clickAllButtonsByClass(classname);
}

function clickFirstAntimamtterDimension() {
    var classname = ".o-primary-btn.o-primary-btn--new";
    clickButtonByClass(classname);
}

// function toggleUntil10() {
//     var className = ".o-primary-btn.l-button-container"
//     var buttons = document.querySelectorAll(className);
// }

async function firstInfinityTas() {
    while(player.antimatter.lt("1.7976931348623157e308")) {
        clickAntimatterDimensions();
        buyMaxTickSpeed();
        await new Promise(r => setTimeout(r, 1));
    }
    // toggleUntil10();
    console.log("done");
}

await firstInfinityTas();