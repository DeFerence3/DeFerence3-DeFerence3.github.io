let result = document.getElementById("res");
function solve() {
  let x = result.value;
  let y = eval(x);
  result.value = y;
}

function dis(val) {
  result.value += val;
}

function clearit() {
  console.log("cleard");
  result.value = "";
  result.blur;
}
