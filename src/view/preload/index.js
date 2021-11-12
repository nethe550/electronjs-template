/**
 * @author nethe550
 * @description Executes on preload of the DOM for the index page.
 */

// populate version elements when page loads
window.addEventListener('DOMContentLoaded', () => {
    
    const replaceText = (selector, text) => {

        const element = document.querySelector(selector);
        if (element) element.innerText = text;

    }

    for (const dependency of ['chrome', 'node', 'electron']) {

        replaceText(`#${dependency}-version`, process.versions[dependency]);

    }

});