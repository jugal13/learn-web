document.addEventListener('DOMContentLoaded', () => {
  let red = document.getElementById('red');
  let green = document.getElementById('green');
  let blue = document.getElementById('blue');
  let alpha = document.getElementById('opacity');
  let hexvalue = '#000000FF';
  let out = document.getElementById('result-hex');
  let outcol = document.getElementById('result-color');
  let value;
  red.addEventListener('input', () => {
    value = Number(red.value).toString(16).toUpperCase();
    hexvalue = updateValue(hexvalue, 0, 1, 3, value);
    console.log(`${hexvalue}`);
    out.innerHTML = hexvalue;
    outcol.style.backgroundColor = `${hexvalue}`;
  });
  green.addEventListener('input', () => {
    value = Number(green.value).toString(16).toUpperCase();
    hexvalue = updateValue(hexvalue, 0, 3, 5, value);
    console.log(`${hexvalue}`);
    out.innerHTML = hexvalue;
    outcol.style.backgroundColor = `${hexvalue}`;
  });
  blue.addEventListener('input', () => {
    value = Number(blue.value).toString(16).toUpperCase();
    hexvalue = updateValue(hexvalue, 0, 5, 7, value);
    console.log(`${hexvalue}`);
    out.innerHTML = hexvalue;
    outcol.style.backgroundColor = `${hexvalue}`;
  });
  alpha.addEventListener('input', () => {
    value = Number(alpha.value).toString(16).toUpperCase();
    hexvalue = updateValue(hexvalue, 0, 7, -1, value);
    console.log(`${hexvalue}`);
    out.innerHTML = hexvalue;
    outcol.style.backgroundColor = `${hexvalue}`;
  }); 
})

function updateValue(hexvalue, left1, left2, right, value) {
  left = hexvalue.slice(left1, left2);
  if (value.length == 1) {
    value = '0' + value;
  }
  if (right == -1) {
    right = '';
  }
  else {
    right = hexvalue.slice(right);
  }
  hexvalue = left + value + right;
  return hexvalue;
}