const productDetails = {
    name : "Apple 2020 Mackbook Air Laptop" ,
    price :  82000 ,
    color : "Grey" ,
    hardDisk : "256 GB" 
}
 
function detailOfProduct (product){
    console.log(`Below are the product  Details`)
    for(let key of Object.keys(product)){
        console.log(`${key} : ${product[key]}`)
    }
}

detailOfProduct(productDetails)




  