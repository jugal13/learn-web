function displayTime() {
  var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
  
  if (hh == 0) { hh = 12; }
  if (hh > 12) { hh = hh - 12; }
  
  sa = (ss * 6)+"deg";
  ma = (mm * 6)+(ss * (60/3600))+"deg";
  ha = (hh * 30)+(mm*0.5)+"deg";
  
  document.getElementById("second").style.webkitTransform = "rotateZ("+sa+")";
  document.getElementById("minute").style.webkitTransform = "rotateZ("+ma+")";
  document.getElementById("hour").style.webkitTransform = "rotateZ("+ha+")";

  setTimeout(displayTime,1000);
}
displayTime()
