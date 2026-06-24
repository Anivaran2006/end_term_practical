function checkPrime() {

    let num = document.getElementById("num").value;
    let prime = true;

    if(num <= 1){
        prime = false;
    }

    for(let i = 2; i < num; i++){

        if(num % i == 0){
            prime = false;
            break;
        }
    }

    if(prime){
        document.getElementById("result").innerHTML =
        num + " is a Prime Number";
    }
    else{
        document.getElementById("result").innerHTML =
        num + " is Not a Prime Number";
    }
}