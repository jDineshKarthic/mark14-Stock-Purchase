
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");
console.log(initialPrice.value);

submitBtn.addEventListener("click",submitHandler);

function showOutput(message){
   
   outputBox.innerHTML=message;
    
}
function submitHandler(){
     var ip = Number(initialPrice.value);
     var qty = Number(stocksQuantity.value);
     var cur = Number(currentPrice.value);
     calculateProfitAndLoss(ip,qty,cur);
}
function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;
        showOutput(`😥😥 OOOPSS!! You have a loss ${loss} and the percetage of loss is ${lossPercentage}%`);
        

    }else if(initial < current){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        showOutput(`😊 HUURAYY !!!You have a Profit ${profit} and the percetage of profit is ${profitPercentage}%`);


    }else{
        showOutput("It's a BREAK EVEN... KEEP TRYING")
    }

}
console.log(calculateProfitAndLoss(100,10,10));
console.log(calculateProfitAndLoss(20,10,100));
console.log(calculateProfitAndLoss(10,10,10));
