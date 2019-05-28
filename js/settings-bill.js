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
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var checkedRadioBtnElem = document.querySelector(".settingsAddBtn");
var totalSettings = document.querySelector(".totalSettings");
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var settingTotalAddBtn = document.querySelector(".settingBillAddBtn");
var updateSettingBtn = document.querySelector(".updateSettings");
var billItemTypeRadio= document.querySelector(".billItemTypeRadio");

var billItemTypeWithSettingsElem = document.querySelectorAll(".billItemTypeWithSettings");

var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

var callsTotalSet = 0;
var smsTotalSet = 0;


function radioBillTotal(){
     
    
if (checkedRadioBtnElem){
   
    var billItemTypeRadio = document.querySelector("input[name='billItemTypeWithSettings']:checked");


    if (billItemTypeRadio.value === "call"){
        var callCostSettingVal = Number(callCostSettingElem.value);
        callsTotalSet += callCostSettingVal;
    }
    else if (billItemTypeRadio.value === "sms"){
        var smsCostSettingVal = Number(smsCostSettingElem.value);
        smsTotalSet += smsCostSettingVal;
    }
      
  
    callTotalSettings.innerHTML = callsTotalSet.toFixed(2);
    smsTotalSettings.innerHTML = smsTotalSet.toFixed(2);
    var totalSettingCost = callsTotalSet + smsTotalSet;
    totalSettings.innerHTML = totalSettingCost.toFixed(2); 

    
    if (totalSettingCost >= 50){
        
        totalSettings.classList.add("danger");
    }
    else if (totalSettingCost >= 30){
        totalSettings.classList.add("warning");
    }

}

}
 checkedRadioBtnElem.addEventListener('click', radioBillTotal);

// function updateSettingTotal(){
     
    
// }
// updateSettingBtn.addEventListener('click', updateSettingTotal);
    
    