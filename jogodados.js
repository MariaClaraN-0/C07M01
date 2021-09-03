const1 =  prompt = require('prompt-sync')({sigint: true});

var r = +prompt("Quantas rodadas voce quer fazer? ");
var j = +prompt("Quantos jogadores vão jogar?")



var jogo = [];
var vencedor =0;

for (let i = 0; i < r; i++) {
   for (let c = 0; c < j; c++) {
   
      var obj = {};
      obj.nome = prompt("Digite o nome dos jogadores: ");
      obj.numdado = (Math.floor(Math.random()*6)+1);
      
      jogo.push(obj);
   
   }
   
  jogo.sort(function (a,b) {
   return b.numdado -a.numdado
   
   
  });
  console.table(jogo);
  


}




   



   



