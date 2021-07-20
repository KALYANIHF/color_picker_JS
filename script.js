const btn = document.querySelector(".btn");
const color_Code = document.querySelector(".color-code");
btn.addEventListener("click", showColor);

function showColor() {
  let random_color = `rgb(${random(255)},${random(255)},${random(255)})`;
  //   console.log(random_color);
  let hex_Value = rgb_to_hex(random_color);
  //   console.log(hex_Value);
  document.body.style.backgroundColor = random_color;
  color_Code.textContent = hex_Value.toUpperCase();
  color_Code.style.color = random_color;
}

function random(value) {
  return Math.floor(Math.random() * value);
}

function rgb_to_hex(rgb) {
  let rgb_string = String(rgb);
  let mod = rgb_string.replace("rgb", "");
  mod = mod.replace("(", "");
  mod = mod.replace(")", "");
  let values = mod.split(",");
  let r, g, b;
  r = values[0];
  g = values[1];
  b = values[2];
  r = Number(r).toString(16);
  g = Number(g).toString(16);
  b = Number(b).toString(16);
  if (r.length == 1) {
    r += "0";
  }
  if (g.length == 1) {
    g += "0";
  }
  if (b.length == 1) {
    b += "0";
  }
  return "#" + " " + r + g + b;
}
