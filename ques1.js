const userName = ["Aruj" ,"Approv" , "Mithun"]



function isUserpresent(name){
    if(userName.includes(name)){
    console.log(`Yes , ${name} is a valid user`)}
    else{
        console.log(`NO ${name} is not a valid user` )
    }
}
isUserpresent("Mithun") ;
isUserpresent("Someone") ;



