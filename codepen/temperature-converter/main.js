function convert(outScale) {
  let form = document.forms['tempconverter'];
  let temp = Number(form['temperature'].value);
  let scale = form['scale'].value;
  let kel;
  let result;
  if (temp !== '' && scale !== '') {
    switch (scale) {
      case 'Celsius':
        kel = temp + 273.15;
        break;
      case 'Fahrenheit':
        kel = (temp + 459.67) * 5 / 9;
        break;
      case 'Kelvin':
        kel = temp;
        break;
      case 'Rankine':
        kel = temp * 5 / 9;
        break;
    }
    switch (outScale) {
      case 'Celsius':
        result = kel - 273.15;
        break;
      case 'Fahrenheit':
        result = kel * 9 / 5 - 459.67;
        break;
      case 'Kelvin':
        result = kel;
        break;
      case 'Rankine':
        result = kel * 9 / 5;
        break;
    }
    result = result.toFixed(2);
    form['result'].value=result;
  }
  else {
    alert('Enter values for scale and temperature');
  }
}