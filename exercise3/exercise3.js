let cardNum = "5103071434833063"

function valid(cardNum){
  let sum = 0

  cardNum = cardNum.split("")
  console.log("Before",cardNum)

  for (let i = 0;i < cardNum.length;i+=2){
    a = 2 * parseInt(cardNum[i])
    d = String(a)

    if (a > 9){
      a = String(a)
      b = parseInt(a[0])
      c = parseInt(a[1])
      d = String(b + c)    
    }  

    cardNum[i] = d
  }

  console.log("After",cardNum)

  for (let i = 0;i < cardNum.length;i++){
    sum += parseInt(cardNum[i])
  }

  return console.log(sum%10 === 0)
}

valid(cardNum)