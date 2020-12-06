const path = require('path');
const {app, Tray, Menu} = require('electron');

module.exports = (window) => {
  const trayIcon = new Tray(path.join(app.getAppPath(), 'resources/icons/normal/48.png'));

  trayIcon.setContextMenu(Menu.buildFromTemplate([
    {
      label: 'Show/Hide',
      click: () => {
        if (window.isVisible()) {
          window.minimize()
        } else {
          window.show()
        }
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      click: () => {
        app.isQuiting = true
        app.quit()
      }
    }
  ]));

  trayIcon.setToolTip(app.getName());

  return trayIcon;
}