export default function generateDesktopIcons(taskList, itemsPerRow = 4) {
  const iconsFlat = taskList.map(({ name, icon }) => ({ name, icon }));
  const rows = [];

  for (let i = 0; i < iconsFlat.length; i += itemsPerRow) {
    rows.push(iconsFlat.slice(i, i + itemsPerRow));
  }

  return rows;
}


export const generateDesktopTaskList = (allTaskList) => {
  const list = allTaskList.filter((item) => item.name !== 'demo');

  return list;
}