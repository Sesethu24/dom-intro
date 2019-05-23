// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var billTypeTextElem = document.querySelector(".billTypeTexts");
var textTotalAddBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne")

var callsTotalOne = 0;
var smsTotalOne = 0;


function textBillTotal(){
    
    var billTypeEntered = billTypeTextElem.value;

    console.log(billTypeEntered)
   
    if (billTypeEntered === "call"){
        callsTotalOne += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotalOne += 0.75;
    }
    
  
    callsTotalElem.innerHTML = callsTotalOne.toFixed(2);
    smsTotalElem.innerHTML = smsTotalOne.toFixed(2);
    var totalCostOne = callsTotalOne + smsTotalOne;
    totalCostElem.innerHTML = totalCostOne.toFixed(2); 
    
    if (totalCostOne >= 50){
        
        totalCostElem.classList.add("danger");
        
    }
    else if (totalCostOne >= 30){
        totalCostElem.classList.add("warning");
    }
    
}
textTotalAddBtn.addEventListener('click', textBillTotal);


