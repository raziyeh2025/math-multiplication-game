const input = document.getElementById("name-input");

function start(e) {
  {
    localStorage.setItem("math_level", e);
    localStorage.setItem("player", input.value.trim());
  }
}
