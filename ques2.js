function calculateTotalCartValues() {
    let sum = 0 ;
    for(i=0 ; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum ;

} 
const result = calculateTotalCartValues(125,20 ,30) ;
console.log(`The total cart value is ${result}`) ;




