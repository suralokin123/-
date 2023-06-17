function processArray() {
  var input = document.getElementById('string-array').value;
  var array = input.split(",");
  var result = "";
  for (var i = 0; i < array.length; i++) {
      if (array[i].length <= 3) {
          result += array[i] + ",";
      }
  }
  if (result == "") {
      document.getElementById('result').textContent = "Новый массив пуст";
  } else {
      document.getElementById('result').textContent = "Новый массив: " + result.slice(0, -1);
  }
}