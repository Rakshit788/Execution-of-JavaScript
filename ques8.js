function calculateRemainingDays(evendate ) {


const currentDate  =  new Date() ;
const eventDatetime = new Date(evendate) ; 

const timeDifference = evendate - currentDate
const daysRemaining = Math.ceil(timeDifference/ (1000*60*60*24))
return daysRemaining ;
}

const evendate = '2023-08-31'

console.log(calculateRemainingDays(evendate)) ;
