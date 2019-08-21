var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var checkedRadioBtnElem = document.querySelector(".radioBillAddBtn");
var callsTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalCostTwoElem = document.querySelector(".totalTwo");

var templateSource2 = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource2);
var myData2 = document.querySelector(".radioData");

let data = radioBtnBill();

radioBillTemp();

function radioBillTemp() {

   
    var checkedRadioBtnElem = document.querySelector("input[name='billItemType']:checked");


    if (checkedRadioBtnElem) {
        billItemType = checkedRadioBtnElem.value;
        data.radioFactory(billItemType);
    }
       
    
    var colourChanger = data.colour();
    
    var myHandler = userTemplate({

        call: "R" + data.getCallCost(),
        sms: "R" + data.getSmsCost(),
        total: "R" + data.billTotal(),
        colourChanger
    });
     myData2.innerHTML = myHandler;

}
checkedRadioBtnElem.addEventListener('click', radioBillTemp)