function setTime(hh,mm,ss,amPm) {
  document.getElementById('hour').innerHTML = hh;
  document.getElementById('minute').innerHTML = mm;
  document.getElementById('second').innerHTML = ss;
  document.getElementById('aptime').innerHTML = amPm;
}

function displayTime() {
  var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
  var amPm = "AM";
  
  if(hh == 0) {
    hh = 12;
  }
  console.log(hh)
  if(hh > 12) {
    hh = hh - 12;
    amPm = "PM";
  }
  
  hh = (hh < 10) ? "0"+hh : hh;
  mm = (mm < 10) ? "0"+mm : mm;
  ss = (ss < 10) ? "0"+ss : ss;
  
  setTime(hh,mm,ss,amPm);
  
  setTimeout(displayTime,1000);  
}

displayTime();