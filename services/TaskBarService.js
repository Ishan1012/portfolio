export default function generateInitialIcons(taskList, defaultIcons = ['terminal.png', 'folder.png', 'chrome.png', 'settings.svg']) {
  return taskList
    .filter(task => defaultIcons.includes(task.icon))
    .map(task => task.icon);
}
