
var vm = new Vue({
    el:"#app",
    data:{
        convert:true
    }   
})

function headerClick(){
    if(vm.convert) {
        vm.convert = false;
    } else {
        vm.convert = true;
    }
}
function convertToDecimal() {
    animation();
    let input = document.getElementById("input").value;
    let inputCount = input.split("");
    let i = 0;
    var resultado = 0;
    while(i < inputCount.length) {
        resultado = resultado + parseInt(inputCount[i]) * Math.pow(2,i);
        i++;
    }
    let resposta = document.getElementById("showConvertedNumber") ;
    resposta.innerText = resultado;
}

function convertToBinary(){
    animation();
    let input = document.getElementById("input").value;
    let resultado = "";
    let div = input;
    while(div != 0) {
        resultado = `${resultado} ${div %2 }`;
        div = Math.trunc(div/2);                   
    }
    let resposta = document.getElementById("showConvertedNumber") ;
    resposta.innerText = resultado;
}

function animation(){
    let menu = document.getElementsByTagName("header")[0];
    let body = document.getElementsByTagName("body")[0];
    body.style.overflowY = "hidden";
    menu.style.height = "150vmin";
    setTimeout(()=>{
        menu.style.height = "15vmin";
    }, 1000);
}

function convert(){
    if(vm.convert) {
        convertToBinary()
    } else {
        convertToDecimal()
    }
}