document.addEventListener("DOMContentLoaded", () => {
  function setTime(hh, mm, ss) {
    document.getElementById("digital-hour").innerHTML = hh;
    document.getElementById("digital-minute").innerHTML = mm;
    document.getElementById("digital-second").innerHTML = ss;
  }

  function createBin(num) {
    num = Number.parseInt(num);
    let bin = [...num.toString(2)];
    if (bin.length < 6) {
      let padding = 6 - bin.length;
      for (let i = 0; i < padding; i++) {
        bin.unshift("0");
      }
    }
    for (let i = 0; i < 6; i++) {
      bin[i] = !!+bin[i];
    }
    bin.reverse();
    return bin;
  }

  function lightUp(bin, element) {
    for (let i = 0; i < 6; i++) {
      if (bin[i]) {
        document.querySelector(`.bin-${element}-${i + 1}`).style.backgroundColor =
          "#17d4feff";
      }
      else {
        document.querySelector(`.bin-${element}-${i + 1}`).style.backgroundColor =
          "white";
      }
    }
  }

  function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    setTime(hh, mm, ss);

    hh = createBin(hh);
    mm = createBin(mm);
    ss = createBin(ss);

    lightUp(hh,'hour');
    lightUp(mm,'minute');
    lightUp(ss,'second');

    setTimeout(displayTime, 1000);
  }

  displayTime();
});
