
var radioButton = document.querySelector(".billItemTypeWithSettings");
var settingsButton = document.querySelector(".settingsAddBtn");
var costCalls = document.querySelector(".callTotalSettings");
var costSms = document.querySelector(".smsTotalSettings");
var costSettings = document.querySelector(".totalSettings");



var Calls = 0;
var Sms = 0;

function AddFunction(){
     
    settingsButton = document.querySelector("input[name='radioButton']:checked");
    if (settingsButton){
         radioButton = settingsButton.value
    
    }
   
    if (radioButton === "call"){
        Calls += 2.75
    }
    else if (radioButton === "sms"){
        Sms += 0.75;
    }
    
  
    costCalls.innerHTML = Calls.toFixed(2);
    costSms.innerHTML = Sms.toFixed(2);
    var totalCost = Calls + Sms;
    costSettings.innerHTML = totalCost.toFixed(2); 

    
    //if (totalCost >= 50){
        
      //  totalCostTwoElem.classList.add("danger");
   // }
   // else if (totalCost >= 30){
       // totalCostTwoElem.classList.add("warning");
   // }

}
 settingsButton.addEventListener('click', AddFunction);
    
 function UpdateButton()
 {

 }
    