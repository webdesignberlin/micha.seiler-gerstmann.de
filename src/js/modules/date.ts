const checkDateNeedZeroPrefix = (date) => date < 10;
const getFormatedDayOrMonth = (date) => {
  if (checkDateNeedZeroPrefix(date)) {
    return `0${date}`;
  }
  return date;
};
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; // cause January is 0
const year = today.getFullYear();
const todayFormated = `${year}-${getFormatedDayOrMonth(month)}-${getFormatedDayOrMonth(day)}`;


function writeCurrentDate(targets) {
  const selectors = document.querySelectorAll(targets);
  if (selectors) {
    selectors.forEach(item => item.setAttribute('datetime', todayFormated));
  }
};

writeCurrentDate('.js-current-date');
