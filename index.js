const path = require('path');
const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		show: false
	});
	mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
	mainWindow.on('ready-to-show', () => {
		mainWindow.show();
	});
});
