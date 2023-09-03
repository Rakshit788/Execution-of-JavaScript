const products = [
[name ="Laptop" , price=120000],
[name ="Mobile" , price=70000],
[name ="Laptop bag" , price=20000],
[name ="Watch" , price=20000],
[name ="Charger" , price = 1500], ]

function finMinAndMaxPrice() {
let minProduct = products[0] ;
let maxProduct = products[0] ;
for(i=1 ; i<products.length ; i++){
    if(maxProduct > products[i] ){
        maxProduct = products[i].price 
    }
    for(i=1 ; i<products.length ; i++){
        if(minProduct < products[i] ){
            minProduct = products[i].price 
        }
        console.log(`The Product with maximum ammount is laptop which is priced at Rs ${maxProduct}`)
        console.log(`The Product with minimum ammount is Mobile Charger which is priced at Rs ${minProduct}`)
}
} }
finMinAndMaxPrice(products)
