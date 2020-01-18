function calculateTip() {
  let form = document.forms['tipcalc'];
  let amount = form['amount'].value;
  let perc = form['tip'].value;
  let people = form['split'].value;

  if( amount === '') {
    alert('Enter an amount');
  }
  else {
    let res = (parseFloat(amount) + perc / 100 * amount) / people;
    form['result'].value = res;
  }
}