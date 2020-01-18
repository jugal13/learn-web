function calculate() {
  let form = document.forms['countdown'];
  if (form['inDate'].value != '') {
    result();
  }
  else {
    alert('Enter a date and time');
  }
}

function result() {
  let form = document.forms['countdown'];
  let value = form['inDate'].value;
  let end = new Date(value);
  let start = new Date();
  let remTime = end.getTime() - start.getTime();
  let ss = Math.floor(remTime / 1000);
  let mm = Math.floor(ss / 60);
  let hh = Math.floor(mm / 60);
  let dd = Math.floor(hh / 24);
  hh %= 24;
  mm %= 60;
  ss %= 60;
  hh = (hh < 0) ? '0' : (hh < 10) ? '0' + hh : hh;
  mm = (mm < 0) ? '0' : (mm < 10) ? '0' + mm : mm;
  ss = (ss < 0) ? '0' : (ss < 10) ? '0' + ss : ss;
  document.getElementById('dd').innerHTML = dd;
  document.getElementById('hh').innerHTML = hh;
  document.getElementById('mm').innerHTML = mm;
  document.getElementById('ss').innerHTML = ss;

  setTimeout(result, 1000);
}