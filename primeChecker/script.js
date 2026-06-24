function checkPrime() {

    let num = Number(document.getElementById("num").value);
    let prime = true;

    if (num < 0) {
        document.getElementById("result").innerHTML =
            "Error: Prime numbers do not exist for negative numbers";
        return;
    }

    if (num <= 1) {
        prime = false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        document.getElementById("result").innerHTML =
            num + " is a Prime Number";
    } else {
        document.getElementById("result").innerHTML =
            num + " is Not a Prime Number";
    }
}