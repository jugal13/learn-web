document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("coversion-form")
    .addEventListener("click", convertor);

  function convertToNum(size) {
    switch (size) {
      case "Bit":
        return 1;
      case "Byte":
        return 2;
      case "Kilobyte":
        return 3;
      case "Megabyte":
        return 4;
      case "Gigabyte":
        return 5;
      case "Terabyte":
        return 6;
    }
  }

  function convertor() {
    let input_type = document.getElementById("input-type").value;
    let output_type = document.getElementById("output-type").value;
    let input_value = document.getElementById("input-value").value;
    input_type = convertToNum(input_type);
    output_type = convertToNum(output_type);
    let diff = parseInt(output_type) - parseInt(input_type);
    let sign;
    if (diff == 0) {
      document.getElementById("output-value").innerHTML = input_value;
    } else if (diff > 0) {
      sign = 1;
    } else {
      sign = 0;
    }

    if (diff != 0) {
      switch (input_type) {
        case 1:
          convert(input_value, 8, Math.abs(diff), sign);
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          convert(input_value, 1024, Math.abs(diff), sign);
          break;
      }
    }
  }

  function convert(value, factor, n, sign) {
    let a = Math.pow(1000, n - 1);
    let ans;

    if (sign == 1) {
      ans = value / (factor * a);
    } else {
      ans = value * (factor * a);
    }
    ans = ans.toFixed(2);

    document.getElementById("output-value").innerHTML = ans;
  }
});
