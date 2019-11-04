for (let start = 111; start <= 999;start++){
    let number = String(start)
    a = parseInt(number[0])
    b = parseInt(number[1])
    c = parseInt(number[2])

    abc = a ** 3 + b ** 3 + c ** 3

    if (start === abc){
        console.log(start)
    }
}


