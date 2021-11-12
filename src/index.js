/**
 * @author nethe550
 * @description The main entrypoint of the application.
 */

const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron');

require('@electron/remote/main').initialize(); // initialize remote hotfix for window titlebar

const path = require('path');

/**
 * Creates a new Electron.js Window.
 * @param {string} page - The relative path within the pages directory of the page to load.
 * @param {string} preload - The relative path within the preload directory to a preload script for this window (optional)
 * @param {number} width - The width of the window. (optional)
 * @param {number} height - The height of the window. (optional)
 */
const createWindow = (page, preload=null, hideMenuBar=true, width=800, height=600) => {

    if (!page) return console.error('createWindow requires argument \'page\'.');

    const options = {
        width: width,
        height: height,
        center: true,
        frame: false,
        autoHideMenuBar: hideMenuBar,
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    };

    if (preload) options.webPreferences['preload'] = path.join(__dirname, `./view/preload/${preload}`);

    const window = new BrowserWindow(options);

    if (window) window.loadFile(`./view/pages/${page}`);

    if (ipcMain && nativeTheme) {

        ipcMain.handle('dark-mode:toggle', () => {

            if (nativeTheme.shouldUseDarkColors) {

                nativeTheme.themeSource = 'light';

            }
            else {

                nativeTheme.themeSource = 'dark';

            }
            
            return nativeTheme.shouldUseDarkColors;

        });

        ipcMain.handle('dark-mode:system', () => {

            nativeTheme.themeSource = 'system';

        });

    }

    require('@electron/remote/main').enable(window.webContents);

}

// ===== Application Events ===== //

app.whenReady().then(() => {
    // create new window when app is ready
    createWindow('index.html', 'index.js');

    app.on('activate', () => {
        // opens a new window if all windows are closed (macOS)
        if (BrowserWindow.getAllWindows().length === 0) createWindow('index.html', 'index.js');
    });
});

app.on('window-all-closed', () => {
    // on windows and linux, exiting all windows usually closes the app
    if (process.platform !== 'darwin') app.quit();
});