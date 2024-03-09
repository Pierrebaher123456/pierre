const card= {
    cardNum: "0123456789",
    cardPin: "1234",
    balance: 1000
}

function checkNumber(){
    if (document.getElementById("number").value == card.cardNum){
        window.location.href = 'pin.html';
    } else{
        console.log("There is something wrong")
    }
}

function checkPin(){
    if (document.getElementById("number").value == card.cardPin){
        window.location.href = 'account-actions.html';
    } else{
        console.log("There is something wrong")
    }
}

function check(){
    if (document.getElementById("withdraw").checked){
        console.log("ok")
    }
}