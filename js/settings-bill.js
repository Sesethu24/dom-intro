
var radioButton = document.querySelector(".billItemTypeWithSettings");
var settingsButton = document.querySelector(".settingsAddBtn");
var costCalls = document.querySelector(".callTotalSettings");
var costSms = document.querySelector(".smsTotalSettings");
var costSettings = document.querySelector(".totalSettings");

var callsElement = document.querySelector(".callCostSetting");
var smsElement = document.querySelector(".smsCostSetting");
var warningLevel = document.querySelector(".warningLevelSetting");
var criticalLevel = document.querySelector(".criticalLevelSetting");
var updateSettingsBtn = document.querySelector(".updateSettings");

var callElement = 0;
var SmssElement = 0;
var warningLev = 0;
var criticalLev = 0;

var Calls = 0;
var Sms = 0;
var totalCost = 0;

function AddFunction(){
    if(!(totalCost >= criticalLev)){
     
    settingsButton = document.querySelector("input[name='radioButton']:checked");
    if (settingsButton){
         radioButton = settingsButton.value
    
    }
   
    if (radioButton === "call"){
        Calls += callElement;
    }
    else if (radioButton === "sms"){
        Sms += SmssElement;
    }
    
  
    costCalls.innerHTML = Calls.toFixed(2);
    costSms.innerHTML = Sms.toFixed(2);
     totalCost = Calls + Sms;
    costSettings.innerHTML = totalCost.toFixed(2); 

    
    if (totalCost >= criticalLev){
        
        costSettings.classList.add("danger");
        costSettings.classList.remove("warning");
    }
    else if (totalCost >= warningLev){
        costSettings.classList.add("warning");
        costSettings.classList.remove("danger");
    }
}
}
 settingsButton.addEventListener('click', AddFunction);
    
 function UpdateButton()
 {
    callElement = Number(callsElement.value);
    SmssElement = Number(smsElement.value);
    warningLev = Number(warningLevel.value);
    criticalLev = Number(criticalLevel.value)
    
    if (totalCost >= criticalLev){
        
        costSettings.classList.add("danger");
        costSettings.classList.remove("warning");
    }
    else if (totalCost >= warningLev){
        costSettings.classList.add("warning");
        costSettings.classList.remove("danger");
    }
    if (totalCost < warningLev){
        costSettings.classList.remove("warning");
        costSettings.classList.remove("danger");
    }
    if (criticalLev < totalCost ){
        costSettings.classList.remove("warning");
        costSettings.classList.remove("danger");
    }
 }
 updateSettingsBtn.addEventListener('click', UpdateButton);