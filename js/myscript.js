// UN GIOCATORE UN COMPUTER , DEFINIRE CHI VINCE QUINDI DEVO GENERARE 2 NUMERI CASUALI E IL PIù ALTO VINCE
//GIOCATORE - CPU 
// FOR CON GIOCATORE CON NUMERO CASUALE & CPU CON NUMERO CASUALE
// SE IL GIOCATORE HA UN NUMERO > DEL NUMERO DELLA CPU ALLORA HA VINTO
// VICEVERSA SE HA UN NUMERO < DI QUELLO DELLA CPU ALLORA HA PERSO
// SE ENTRAMBI AVRANNO NUMERO = ALLORA SARà PAREGGIO


    let playerNumber = Math.round(Math.random()*6 + 1);
    let cpuNumber = Math.round(Math.random()*6 + 1);


for (let i = 0; i < 6; i++) {
    } if (playerNumber > cpuNumber){
        console.log("Hai vinto");
    } else if (playerNumber < cpuNumber){
        console.log("Hai perso");
    } else if (playerNumber = cpuNumber){
        console.log("Hai pareggiato");
    }   

// CREO L 'ARRAY 
const emailList = ["giorgio2@gmail.com", "babbonatale@gmail.com", "dajeroma@gmail.com", "jstiodio@gmail.com"]

const userEmail = prompt("type your email address")

let isMailFound = false;

for( let i = 0; i < emailList.length - 1; i++){

    if (emailList[i] === userEmail) {
        isMailFound = true;
    
}if ( isMailFound) {
    console.log("Access valid");

}else {
    console.log("Access denied");
}
}



// ADESSO CHEIDO ALL'UTENTE LA SUA EMAIL E SE è NELLA LISTA AVRà UN MESSAGGIO POSITIVO O NEGATIVO





