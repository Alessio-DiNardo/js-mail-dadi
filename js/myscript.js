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
    } if (playerNumber < cpuNumber){
        console.log("Hai perso");
    } if (playerNumber = cpuNumber){
        console.log("Hai pareggiato");
        
    }   