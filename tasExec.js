//used to run the TAS.
//load functions.js
function loadJS(FILE_URL, async = true) {
    let scriptEle = document.createElement("script");

    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", async);

    document.body.appendChild(scriptEle);

    // success event 
    scriptEle.addEventListener("load", () => {
        console.log("File loaded")
    });
        // error event
    scriptEle.addEventListener("error", (ev) => {
        console.log("Error on loading file", ev);
    });
}

loadJS("https://raw.githubusercontent.com/galegozi/antimamtter-dimension-tas/main/functions.js");
//load taskRunner.js
loadJS("https://raw.githubusercontent.com/galegozi/antimamtter-dimension-tas/main/tasRunner.js");