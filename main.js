const numeroAleatório = 7;
let chute = "";
let acertou = false; 

for (let contador =0; contador < 3; contador ++){
  chute = prompt ("Tente adivinhar o número escondido, de 0 a 10:")
  if(chute == numeroAleatório){
    alert (`Parabéns, você acertou o número, o numero era ${numeroAleatório}`);
    acertou = true;
    break;
  }
  alert ("Errado!")
}
if (!acertou){
  alert (`Você errou o número, o número certo era ${numeroAleatório}`)

}


  /*                     com numero rondom 


const numeroAleatórioRandon = Match.floor ((Match.Randon) * (10 - 0+1) + min )
let sorte = ""
acerto = false 

for (let contador = 0; contador < 3; ++) {
  sorte = prompt ("Acerto o numero que eu escolhi, de zero a 10")
  
  if ( sorte == numeroAleatórioRandon) {
    alert (`Parabéns, você acertou o numero que é ${numeroAleatórioRandon}`)
    acerto = true 
    break 
  }
  acerto = ("Errado!")
}
*/