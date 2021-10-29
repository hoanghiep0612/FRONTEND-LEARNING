function CheckOdEvenOfNumber() {
    if (number % 2 == 0) {
        console.log("là số chẳn")
    } else {
        console.log("là số lẻ")
    }
}

// p2

/*
function CheckOdEvenOfNumberInnerHtml(){
    var resultEle = document.querySelector('#result')
    var inputEle = document.querySelector("#number")

    console.log(inputEle, 'kết quả')
    console.log(resultEle, 'kết quả')
    
    if(inputEle.value % 2 == 0){
        resultEle.innerHTML = "<span style='color: red'   > so chẳn </span>"
    }
    else{
        resultEle.innerHTML = "só lẻ"
    }
    }
*/

function CheckNumber() {
    var resultEle = document.querySelector('#result')
    var inputEle =document.querySelector('#number')

    if( (inputEle.value - (inputEle.value % 2)) == inputEle.value){
        resultEle.innerHTML=('số nguyên');
    } else{
        resultEle.innerHTML=('số thập phân');
    }
}

