const btnDayDiff = document.getElementById('btnDayDiff');
const btnGetDate = document.getElementById('btnGetDate');

const fromDate = document.getElementById('fromDate');
const toDate = document.getElementById('toDate');
const diffDays = document.getElementById('diffDays');
const untilDate = document.getElementById('untilDate');

const diffResult = document.getElementById('diffResult');

toDate.valueAsDate = new Date();
untilDate.valueAsDate = new Date();

btnDayDiff.addEventListener('click', () => {
  const fromValue = fromDate.value;
  const toValue = toDate.value;

  if (!fromValue || !toValue) {
    diffResult.innerHTML = '';
    return;
  }

  const from = moment(fromValue);
  const to = moment(toValue);

  const dayDiff = from.diff(to, 'days');
  const bizDiff = from.businessDiff(to);
  console.log(`day diff: ${dayDiff}, business diff: ${bizDiff}`);

  diffResult.innerHTML = `<b>Business diff = ${bizDiff}</b> (days diff = ${dayDiff})`;
});

btnGetDate.addEventListener('click', () => {
  // const fromValue = fromDate.value;
  // const toValue = toDate.value;

  // if (!fromValue || !toValue) {
  //   diffResult.innerHTML = '';
  //   return;
  // }

  // const from = moment(fromValue);
  // const to = moment(toValue);

  // const dayDiff = from.diff(to, 'days');
  // const bizDiff = from.businessDiff(to);
  // console.log(`day diff: ${dayDiff}, business diff: ${bizDiff}`);

  // diffResult.innerHTML = `<b>Business diff = ${bizDiff}</b> (days diff = ${dayDiff})`;
});
