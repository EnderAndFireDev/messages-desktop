const { BrowserWindow, app, remote } = require("electron");
const { join } = require("path");

app.on('ready', () => {

    console.log(join(app.getAppPath(), '/static/icon.png'))

    const messages = new BrowserWindow({
        title: 'Messages',
        width: 1280,
        height: 720,
        resizable: false,
        maximizable: false,
        minimizable: true,
        closable: true,
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true
        },
        frame: false,
        icon: join(app.getAppPath(), '/static/icon.png')
    })

    messages.loadURL(join(app.getAppPath(), '/static/index.html'))

    messages.setMenuBarVisibility(false)

    setInterval(function() {
        try {
            messages.setTitle('Messages')
        }
        catch (e) {

        }
    }, 1);

    messages.webContents.on('new-window', (e) => {
        e.preventDefault()
    })

})