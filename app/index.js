'use strict';

const electron = require('electron')
const { app, BrowserWindow } = electron

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });
    alert()
    mainWindow.loadURL(`file://${__dirname}/menu.html`)
});