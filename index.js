const  prompt = require('prompt-sync')({sigint: true});


var tylerDurden = 0;
var Jakeocachorro = 0;
var MarlaSinger = 0;
var Votonulo = 0;
var votobranco = 0;





function autorizaVoto(anoNascimento) {
    var calcule = 2021 - anoNascimento;


  if (calcule >= 18){
       return "Obrigatorio"
   } else if (calcule < 16){
       return "Negado"
   } else if (calcule === 16){
       return "opcional"
   } else if (calcule === 17){
       return "Opcional"
   }

   
}  

console.log("Opção de candidatos:");
console.log("1-Tyler Durden");
console.log("2-Jake o cachorro");
console.log("3-Marla Singer");
console.log("4-Voto Nulo");
console.log("5-Voto em branco");


function votacao(autorizacao, voto){
    if (autorizacao === "Negado"){
        console.log("Voce nao pode votar")
    } else  {
       
     if (voto === 1){
     tylerDurden++;
    } else if (voto ===2){
     Jakeocachorro++;
    }else if (voto === 3){
     MarlaSinger++;
    }else if (voto === 4){
     Votonulo++;
    }else if (voto === 5){
     votobranco++;
    }
}

    
}

function exibirResultados(){
    console.log(`O cadidato Tyler Durden recebeu ${tylerDurden} votos`);
    console.log(`O candidaro Jake o Cachorro recebeu ${Jakeocachorro} votos`);
    console.log(`O candidato Marla Singer recebeu ${MarlaSinger} votos`);
    console.log(`Resultado de votos nulos: ${Votonulo}`);
    console.log(`Resultado de votos em branco: ${votobranco}`);

    if(tylerDurden > Jakeocachorro){
        console.log("O candidato Tyler Durden venceu a votação")
    } else if (tylerDurden > MarlaSinger){
        console.log("O candidato Tyler Durden venceu a votação")
    } else if(Jakeocachorro > tylerDurden){
        console.log("O candidato Jake o Cachorro venceu a votação")
    } else if (Jakeocachorro > MarlaSinger){
        console.log("O candidato Jake o Cachorro venceu a votação")
    } else if (Jakeocachorro < MarlaSinger){
        console.log("A candidata Marla Singer venceu a votação")
    } else if (tylerDurden > MarlaSinger){
        console.log("A candidata Marla Singer venceu a votação")
    }

}



while (escolhafinal = "nao"){
escolhafinal = "sim";
while (escolhafinal === "sim"){
   var autorizacao = autorizaVoto(+prompt("Ano de nascimento: "));
   votacao(autorizacao,+prompt("Digite seu voto: "));
   var escolhafinal = prompt("Deseja votar novamente? ").toLowerCase();
   
}

exibirResultados();
if (escolhafinal = "nao"){
    break
}

}

     
    




   