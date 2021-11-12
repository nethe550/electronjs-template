/**
 * The global Theme manager.
 * @class
 */
class Theme {

    /**
     * Creates a new Theme manager.
     * @constructor
     * @param {string} defaultTheme - The default theme.
     */
    constructor(defaultTheme) {

        this.theme = defaultTheme;

        /**
         * @type {HTMLElement}
         */
        this.buttonIcon = document.getElementById('theme-button-icon');

        if (!this.buttonIcon) console.warn('No theme button found.');

        this.updateTheme();

    }

    updateTheme() {

        /**
         * @type {HTMLElement}
         */
        const root = document.querySelector(':root');
        
        /**
         * @type {HTMLElement}
         */
        const minIcon = document.querySelector('#min-button-icon');

        /**
         * @type {HTMLElement}
         */
         const maxIcon = document.querySelector('#max-button-icon');

         /**
         * @type {HTMLElement}
         */
        const restoreIcon = document.querySelector('#restore-button-icon');

        /**
         * @type {HTMLElement}
         */
         const closeIcon = document.querySelector('#close-button-icon');

        if (!root) return console.error('No root element found.');
        if (!minIcon) return console.error('No min icon found.');
        if (!maxIcon) return console.error('No max icon found.');
        if (!restoreIcon) return console.error('No restore icon found.');
        if (!closeIcon) return console.error('No close icon found.');

        switch (this.theme) {

            case 'dark':
                root.style.setProperty('--font-color',    getComputedStyle(root).getPropertyValue('--font-dark-color')    );
                root.style.setProperty('--a-color',       getComputedStyle(root).getPropertyValue('--a-dark-color')       );
                root.style.setProperty('--a-hover-color', getComputedStyle(root).getPropertyValue('--a-dark-hover-color') );
                root.style.setProperty('--b-color',       getComputedStyle(root).getPropertyValue('--b-dark-color')       );
                root.style.setProperty('--b-hover-color', getComputedStyle(root).getPropertyValue('--b-dark-hover-color') );
                root.style.setProperty('--icon-filter', 'invert(1)');

                minIcon.srcset = './static/icons/min-w-10.png 1x, ./static/icons/min-w-12.png 1.25x, ./static/icons/min-w-15.png 1.5x, ./static/icons/min-w-15.png 1.75x, ./static/icons/min-w-20.png 2x, ./static/icons/min-w-20.png 2.25x, ./static/icons/min-w-24.png 2.5x, ./static/icons/min-w-30.png 3x, ./static/icons/min-w-30.png 3.5x';
                maxIcon.srcset = './static/icons/max-w-10.png 1x, ./static/icons/max-w-12.png 1.25x, ./static/icons/max-w-15.png 1.5x, ./static/icons/max-w-15.png 1.75x, ./static/icons/max-w-20.png 2x, ./static/icons/max-w-20.png 2.25x, ./static/icons/max-w-24.png 2.5x, ./static/icons/max-w-30.png 3x, ./static/icons/max-w-30.png 3.5x';
                restoreIcon.srcset = './static/icons/restore-w-10.png 1x, ./static/icons/restore-w-12.png 1.25x, ./static/icons/restore-w-15.png 1.5x, ./static/icons/restore-w-15.png 1.75x, ./static/icons/restore-w-20.png 2x, ./static/icons/restore-w-20.png 2.25x, ./static/icons/restore-w-24.png 2.5x, ./static/icons/restore-w-30.png 3x, ./static/icons/restore-w-30.png 3.5x';
                closeIcon.srcset = './static/icons/close-w-10.png 1x, ./static/icons/close-w-12.png 1.25x, ./static/icons/close-w-15.png 1.5x, ./static/icons/close-w-15.png 1.75x, ./static/icons/close-w-20.png 2x, ./static/icons/close-w-20.png 2.25x, ./static/icons/close-w-24.png 2.5x, ./static/icons/close-w-30.png 3x, ./static/icons/close-w-30.png 3.5x';
                
                this.buttonIcon.srcset = './static/icons/light.svg';
                break;

            case 'light':
                root.style.setProperty('--font-color',    getComputedStyle(root).getPropertyValue('--font-light-color')   );
                root.style.setProperty('--a-color',       getComputedStyle(root).getPropertyValue('--a-light-color')      );
                root.style.setProperty('--a-hover-color', getComputedStyle(root).getPropertyValue('--a-light-hover-color'));
                root.style.setProperty('--b-color',       getComputedStyle(root).getPropertyValue('--b-light-color')      );
                root.style.setProperty('--b-hover-color', getComputedStyle(root).getPropertyValue('--b-light-hover-color'));
                root.style.setProperty('--icon-filter', 'invert(0)');

                minIcon.srcset = './static/icons/min-k-10.png 1x, ./static/icons/min-k-12.png 1.25x, ./static/icons/min-k-15.png 1.5x, ./static/icons/min-k-15.png 1.75x, ./static/icons/min-k-20.png 2x, ./static/icons/min-k-20.png 2.25x, ./static/icons/min-k-24.png 2.5x, ./static/icons/min-k-30.png 3x, ./static/icons/min-k-30.png 3.5x';
                maxIcon.srcset = './static/icons/max-k-10.png 1x, ./static/icons/max-k-12.png 1.25x, ./static/icons/max-k-15.png 1.5x, ./static/icons/max-k-15.png 1.75x, ./static/icons/max-k-20.png 2x, ./static/icons/max-k-20.png 2.25x, ./static/icons/max-k-24.png 2.5x, ./static/icons/max-k-30.png 3x, ./static/icons/max-k-30.png 3.5x';
                restoreIcon.srcset = './static/icons/restore-k-10.png 1x, ./static/icons/restore-k-12.png 1.25x, ./static/icons/restore-k-15.png 1.5x, ./static/icons/restore-k-15.png 1.75x, ./static/icons/restore-k-20.png 2x, ./static/icons/restore-k-20.png 2.25x, ./static/icons/restore-k-24.png 2.5x, ./static/icons/restore-k-30.png 3x, ./static/icons/restore-k-30.png 3.5x';
                closeIcon.srcset = './static/icons/close-k-10.png 1x, ./static/icons/close-k-12.png 1.25x, ./static/icons/close-k-15.png 1.5x, ./static/icons/close-k-15.png 1.75x, ./static/icons/close-k-20.png 2x, ./static/icons/close-k-20.png 2.25x, ./static/icons/close-k-24.png 2.5x, ./static/icons/close-k-30.png 3x, ./static/icons/close-k-30.png 3.5x';

                this.buttonIcon.srcset = './static/icons/dark.svg';
                break;

        }

    }

    toggleTheme() {

        this.theme == 'dark' ? this.theme = 'light' : this.theme = 'dark';

        this.updateTheme();

    }

}

const theme = new Theme('dark');

// make theme toggle button work when clicked
document.getElementById('theme-button').addEventListener('click', () => {
    theme.toggleTheme();
});