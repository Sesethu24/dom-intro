// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var billStringElement = document.querySelector(".billString");
  var textBillAddBtnElement = document.querySelector(".textBillAddBtn");
var callsTotal = 0;
var smsTotal = 0;
function textBillTotal(){
    var billTypeEntered = billTypeText.value.trim();
   
    if (billTypeEntered === "bill"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
  
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    
    
    if (totalCost >= 50){
        
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
    totalCostElem.innerHTML = totalCost.toFixed(2); 
}
textBillAddBtnElement.addEventListener('click', textBillTotal);