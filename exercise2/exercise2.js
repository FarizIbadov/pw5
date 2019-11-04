let banknotes = [200,100,50,20,10,5,1]
let amount = 369

for(let i = 0;i < banknotes.length;i++){
    if (amount >= banknotes[i]){
        count = Math.floor(amount / banknotes[i])
        amount = amount % banknotes[i]
        console.log(`${count} banknotes of ${banknotes[i]} manat`)
    }
}