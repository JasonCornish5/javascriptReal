turn = "O";

function boxClick(number) {
  const box = document.getElementById('box' + number);

  while (box.innerHTML === "-") {
    if (turn === "O") {
      turn = "X";
      box.innerHTML = turn;
    }
    else if(turn === "X") {
      turn = "O"
      box.innerHTML = turn;
    }
  }
}
