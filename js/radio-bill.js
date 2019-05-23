// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billItemTypeRadio= document.querySelector(".billItemTypeRadio");
var checkedRadioBtn = document.querySelector(".radioBillAddBtn");
var callsTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalCostTwoElem = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;

function radioBillTotal(){
     
    
if (checkedRadioBtn){
    var billItemTypeRadio = document.querySelector("input[name='billItemType']:checked");

   
}
   
   
    if (billItemTypeRadio.value === "call"){
        callsTotal += 2.75
    }
    else if (billItemTypeRadio.value === "sms"){
        smsTotal += 0.75;
    }
    
  
    callsTotalTwoElem.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostTwoElem.innerHTML = totalCost.toFixed(2); 

    
    if (totalCost >= 50){
        
        totalCostTwoElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostTwoElem.classList.add("warning");
    }

}
 checkedRadioBtn.addEventListener('click', radioBillTotal);

