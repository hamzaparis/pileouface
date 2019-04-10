module.exports = class Game {
    constructor(playerA, playerB, numberOfWon){
        this.playerA = playerA;
        this.playerB = playerB;
        this.numberOfWon = numberOfWon;
        this.currentRound = 0;
        
    }

    play(){



    let g = true;
    while(g === true){
        this.currentRound ++;

        const tab=[0,1];


        for (let i = tab.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tab[i], tab[j]] = [tab[j], tab[i]];
        }
        const playerA=tab[0];
        const playerB=tab[1];
        
        console.log(`${this.playerA.name} à jouer ${playerA} et ${this.playerB.name} à jouer ${playerB}`);
        
        if(playerA === 0){ 
            this.playerA.score ++; 
            console.log(`${this.playerA.name} à gagner ce tour`);
        }
        if(playerB === 0){ 
            this.playerB.score ++;
            console.log(`${this.playerB.name} à gagner ce tour`);
        }

      
            

       

        if(this.playerA.score === this.numberOfWon){
            console.log(`${this.playerA.name} à gagné la partie ! --- [${this.currentRound} rounds] - [${this.playerA.score} - ${this.playerB.score}]`);
            g = false;
        }else if(this.playerB.score === this.numberOfWon){
            console.log(`${this.playerB.name} à gagné la partie ! --- [${this.currentRound} rounds] - [${this.playerA.score} - ${this.playerB.score}]`);
            g = false;
        }
    }
}
}