const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const isDev = require('electron-is-dev');
const settings = require('electron-settings');
const path = require('path');
const url = require('url');
const fs = require('fs');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    title: 'Phrasebook'
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '/build/index.html')}`
  );

  mainWindow.on('closed', () => {
    mainWindow = null
  });

  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      label: 'Application',
      submenu: [
        {
          label: 'About Application',
          selector: 'orderFrontStandardAboutPanel:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Export',
          accelerator: 'CmdOrCtrl+E',
          click: () => {
            dialog.showSaveDialog(mainWindow, {
              defaultPath: 'my-phrasebook.json',
              buttonLabel: 'Export',
              showsTagField: false
            }, (filePath) => {
              if (!filePath) {
                return;
              }
              try {
                fs.writeFileSync(filePath, JSON.stringify(settings.get('entries') || []), 'utf-8');
              } catch(e) {
                dialog.showMessageBox(mainWindow, {
                  message: 'Oops. Something went wrong...'
                }, () => {});
              }
            });
          }
        },
        {
          label: 'Import',
          accelerator: 'CmdOrCtrl+I',
          click: () => {
            dialog.showOpenDialog(mainWindow, {
              buttonLabel: 'Import',
              properties: ['openFile'],
              filters: [{
                name: 'JSON files',
                extensions: ['json']
              }]
            }, (filePath) => {
              if (!filePath || !filePath[0]) {
                return;
              }
              try {
                let content = fs.readFileSync(filePath[0], 'utf-8');
                if (!content) {
                  throw false;
                }
                settings.set('entries', JSON.parse(content));
                mainWindow.reload();
              } catch(e) {
                dialog.showMessageBox(mainWindow, {
                  message: 'Oops. Something went wrong...'
                }, () => {});
              }
            });
          }
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Undo',
          accelerator: 'CmdOrCtrl+Z',
          selector: 'undo:'
        },
        {
          label: 'Redo',
          accelerator: 'Shift+CmdOrCtrl+Z',
          selector: 'redo:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Cut',
          accelerator: 'CmdOrCtrl+X',
          selector: 'cut:'
        },
        {
          label: 'Copy',
          accelerator: 'CmdOrCtrl+C',
          selector: 'copy:'
        },
        {
          label: 'Paste',
          accelerator: 'CmdOrCtrl+V',
          selector: 'paste:'
        },
        {
          label: 'Select All',
          accelerator: 'CmdOrCtrl+A',
          selector: 'selectAll:'
        }
      ]
    }
  ]));
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

ipcMain.on('retrieve-entries', (event) => {
  event.sender.send('entries-retrieved',
    settings.get('entries') || []);
});

ipcMain.on('sync-entries', (event, entries) => {
  let observer = settings.watch('entries', () => {
    event.sender.send('entries-synced', null);
    observer.dispose();
  });
  settings.set('entries', entries);
});