function solve(lost, helmet, sword, shield, armor){


let expense = 0;
let shieldCount = 0;


for (let i = 1; i <= lost; i++) {

    if( i % 2 === 0){
        expense += helmet
    }
    if ( i % 3 === 0){
        expense += sword
    }
    
    if ( i % 2 === 0 &&  i % 3 === 0){
    
        expense += shield;
        shieldCount++
    }
    if ( shieldCount % 2 === 0 && shieldCount > 0){
        expense += armor
        shieldCount = 0
    }
   

    
}



console.log(`Gladiator expenses: ${expense.toFixed(2)} aureus`);

}
