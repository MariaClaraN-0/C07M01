console.log( "Jokenpô" );
console.log();



var usuariocont = 0;
var compcont = 0;


escolhafinal = "sim" ;
while (escolhafinal == "sim") {
  var r = +prompt("Numero de rodadas: ");
  for (var i = 0; i <= r  ; i++){
  console.log("Escolha Pedra[1],papel[2],tesoura[3]");
  
  let usuario = +prompt("Opção de jogada:")
  let comp = Math.floor(Math.random() *3)+1;
  console.log(comp)
  
  if ( usuario === 1 && comp === 3){
    usuariocont++;
    console.log("Ponto para você!")
   } else if (usuario === 3 && comp === 1){
    compcont++;
    console.log("Ponto para o computador!")
  } else if (usuario === 3 && comp === 2){
    usuariocont++;
    console.log("Ponto para você!")
  } else if (usuario === 2 && comp === 3){
    compcont++;
    console.log("Ponto para o computador!")
  } else if (usuario === 1 && comp === 2){
    compcont++;
    console.log("Ponto para o computador!")
  } else if (usuario === 2 && comp === 1) {
    usuariocont++;
    console.log("Ponto para você!")
    console.log()
  } else if (usuario === 1 && comp === 1){
    console.log()
  } else if (usuario === 3 && comp === 3){
    console.log()
  } else if (usuario === 2 && comp === 2){
    console.log()
  }
   console.log()
}
if (usuariocont > compcont){
  console.log("Parabéns!Você ganhou.")
  } else if (compcont > usuariocont){
  console.log("Que pena,computador ganhou!")
  } else if (usuariocont === compcont){
  console.log("Empate!") }

  console.log();

  var escolhafinal = prompt("Quer jogar novamente?").toLowerCase();
  
}  