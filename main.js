const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');

const path = require('path');
const url = require('url');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '/build/index.html')}`
  );

  mainWindow.on('closed', () => {
    mainWindow = null
  });

  mainWindow.setMenu(null);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.dock.hide();

ipcMain.on('retrieve-entries', (event) => {
  setTimeout(() => {
    event.sender.send('entries-retrieved', [
      {key: 'a', 'value': 'b'}
    ]);
  }, 3000);
});

ipcMain.on('sync-entries', (event) => {
  setTimeout(() => {
    event.sender.send('entries-synced', null);
  }, 3000);
});