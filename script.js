function calculate(gate) {
  let a = parseInt(document.getElementById("inputA").value);
  let b = parseInt(document.getElementById("inputB").value);
  let result;

  switch (gate) {
    case "AND":
      result = a && b;
      break;
    case "OR":
      result = a || b;
      break;
    case "XOR":
      result = a ^ b;
      break;
    case "NOT":
      result = a ? 0 : 1;
      break;
    default:
      result = "–";
  }

  document.getElementById("result").textContent = result;
}
