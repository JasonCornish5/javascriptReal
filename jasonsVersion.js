let turn = "O";

function boxClick(numberBox) {
 let box = document.getElementById('box' + numberBox);


 while(box.innerHTML === '-'){
   if(turn === 'O') {
     turn = 'X';
     box.innerHTML = turn;
   } else if(turn === 'X') {
     turn = 'O';
     box.innerHTML = turn;
   }
 }

}
