const path = require('path');
const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow()
	mainWindow.loadURL(path.join('file://', __dirname, 'index.html'))
});
