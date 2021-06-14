const btnDayDiff = document.getElementById('btnDayDiff');
const btnGetDate = document.getElementById('btnGetDate');

const fromDate = document.getElementById('fromDate');
const toDate = document.getElementById('toDate');
const diffDays = document.getElementById('diffDays');
const fromDate2 = document.getElementById('fromDate2');

const diffResult = document.getElementById('diffResult');
const targetDateEle = document.getElementById('targetDate');
const sqlEle = document.getElementById('sqlResult');

toDate.valueAsDate = new Date();
fromDate2.valueAsDate = new Date();

btnDayDiff.addEventListener('click', () => {
  const fromValue = fromDate.value;
  const toValue = toDate.value;

  if (!fromValue || !toValue) {
    diffResult.innerHTML = '';
    return;
  }

  const from = moment(fromValue);
  const to = moment(toValue);

  const dayDiff = to.diff(from, 'days');
  const bizDiff = to.businessDiff(from);
  const sqlDiff = -1 * dayDiff;

  diffResult.innerHTML = `Business day diff = ${bizDiff}, normal day diff = ${dayDiff}`;
  sqlEle.innerHTML = `DATEADD(D, ${sqlDiff}, GETUTCNOW())`;
});

btnGetDate.addEventListener('click', () => {
  const fromValue = fromDate2.value;
  const diff = Number(diffDays.value) || 0;

  if (!fromValue) {
    dateResult.innerHTML = '';
    return;
  }

  const from = moment(fromValue);
  const to = from.businessAdd(diff);

  targetDateEle.innerText = to.format('MM/DD/YYYY');
});
