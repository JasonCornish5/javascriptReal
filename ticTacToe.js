console.log("sanity check")
let game = ['-','-','-','-','-','-','-','-','-']
let turn = 'O';

 function boxClick(boxNumber) {
  const box = document.getElementById('box'+boxNumber);
  let playerO = `O`;

  while(box.innerHTML === '-'){
    if(turn === 'O') {
      turn = 'X';
      box.innerHTML = turn;
      box.style.color = 'black';
    } else if(turn === 'X') {
      turn = 'O';
      box.innerHTML = turn;
      box.style.color = 'black';
    }
  }


}
