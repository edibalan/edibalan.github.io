const QS = element => document.querySelector(element);
const QSAll = nodes => document.querySelectorAll(nodes);

const clickSound = () => QS('#click-sound').play();
const darkModeSound = () => QS('#light-off').play();
const lightModeSound = () => QS('#light-on').play();

export { clickSound, darkModeSound, lightModeSound, QS, QSAll }