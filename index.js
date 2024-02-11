// Code your solutions in this file

function writeCards(x){
    let thankYouArray=[]
    for (let i=0 ; i< x.length ; i++){
        thankYouArray.push(`Thank you, ${x[i]}, for the wonderful surprise gift!`)
        debugger;
    }
   return thankYouArray
}

function countDown(x){
    let count = 10
    while(count >= 0){
        console.log(count)
        count--
    }
}
