// ==UserScript==
// @name         KYNOBY Dark Mode
// @namespace    http://tampermonkey.net/
// @version      v1.1
// @description  try to take over the world!
// @author       Zaeem
// @match        https://www.kynoby.ai/*
// @match        https://myai-dev-new-2023-09-26-b6s8m.kinsta.app/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kynoby.ai
// @grant        none
// ==/UserScript==

function changeDataThemes() {
    document.querySelectorAll("#root [data-theme='light']").forEach(element => {
        element.setAttribute("data-theme", "GreenDark");
    });

    document.querySelectorAll("#root [data-bs-theme='light']").forEach(element => {
        element.setAttribute("data-bs-theme", "dark");
    });
}

var callback = function(mutationsList, observer) {
    mutationsList.forEach(mutation => {
        if (mutation.type === 'childList' || (mutation.type === 'attributes' && (mutation.attributeName === 'data-theme' || mutation.attributeName === 'data-bs-theme'))) {
            changeDataThemes();
        }
    });
};

function handleURLChange() {
    observer.disconnect();
    observer.observe(document.getElementById('root'), { attributes: true, childList: true, subtree: true });
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

var observer = new MutationObserver(callback);

window.addEventListener('popstate', handleURLChange);
observer.observe(document.getElementById('root'), { attributes: true, childList: true, subtree: true });

addGlobalStyle("tr.AddErrorColorToRow > td, tr.AddErrorColorToRow > td > span, tr.AddErrorColorToRow > td > a, button.d-center, .d-center, .bi:not(.bg-orrange), .autosuggest-input { color: white !important }");
addGlobalStyle(".blink td { animation: none !important }");
addGlobalStyle(".react-pdf__Page, html, body, .d-center, select#LetterType, .autosuggest-input { background-color: #212529 !important }");
addGlobalStyle(".react-pdf__Page__canvas { opacity: .5 }");
addGlobalStyle(".css-13cymwt-control, div#react-select-4-listbox, div#react-select-3-listbox, div#react-select-2-listbox, div#react-select-1-listbox { background: black !important }");
