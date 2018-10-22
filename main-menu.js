const { app, Menu } = require('electron');

const { showMessage, showOpenDialog, showSaveDialog } = require('./dialogs');

const isWindows = process.platform === 'win32';

function setMainMenu(mainWindow) {
	const template = [
		{
			label: isWindows ? 'File' : app.getName(),
			submenu: [
				{
					label: 'Say Hello',
					click() {
						showMessage(mainWindow);
					}
				},
				{
					label: 'Save Memory Usage Info',
					click() {
						showSaveDialog(mainWindow);
					}
				},
				{
					label: 'Open File',
					click() {
						showOpenDialog(mainWindow);
					}
				},
				{
					label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
					accelerator: isWindows ? 'Alt+F4' : 'CmdOrCtrl+Q',
					click() {
						app.quit();
					}
				}
			]
		},
		{
			label: 'Edit',
			submenu: [
				{ role: 'undo' },
				{ role: 'redo' },
				{ type: 'separator' },
				{ role: 'cut' },
				{ role: 'copy' },
				{ role: 'paste' },
				{ role: 'selectall' }
			]
		}
	];

	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);
}

module.exports = {
	setMainMenu
}
