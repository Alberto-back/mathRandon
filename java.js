const numberRandom = 7;
let number= "";
let acertou = false;

for (let contador = 0; contador <3; contador ++ ){
    number = prompt ("escolha uym número de 0 a 7")
    if (number == numberRandom){
        alert= (`Parabéns, acertou o número ${numberRandom}`)
        acertou = true
        break
    }
    alert =("Errado!")
}
if (!acertou) {
    alert ("tente novamente mais tarde")
}