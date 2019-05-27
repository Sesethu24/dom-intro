// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var callTotalSettingElem = document.querySelector(".callTotalTwo");
var smsTotalSettingElem = document.querySelector(".smsTotalTwo");
var checkedRadioBtnElem = document.querySelector(".radioBillAddBtn");
var totalSetttingElem = document.querySelector(".totalTwo");
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var settingTotalAddBtn = document.querySelector(".settingBillAddBtn");


var callsTotalSet = 0;
var smsTotalSet = 0;

function radioBillTotal(){
     
    
if (checkedRadioBtnElem){
    var billItemTypeRadio = document.querySelector("input[name='billItemType']:checked");

}
    if (billItemTypeRadio.value === "call"){
        callsTotalSet += 2.75
    }
    else if (billItemTypeRadio.value === "sms"){
        smsTotalSet += 0.75;
    }
      
  
    callsTotalSettingsElem.innerHTML = callsTotalSet.toFixed(2);
    smsTotalSettingElem.innerHTML = smsTotalSet.toFixed(2);
    var totalSettingCost = callsTotalSet + smsTotalSet;
    totalSettingElem.innerHTML = totalSettingCost.toFixed(2); 

    
    if (totalSettingCost >= 50){
        
        totalSettingElem.classList.add("danger");
    }
    else if (totalSettingCost >= 30){
        totalSettingElem.classList.add("warning");
    }

}
 checkedRadioBtnElem.addEventListener('click', radioBillTotal);

