    var billTypeTextElem = document.querySelector(".billTypeTexts");
    var textTotalAddBtn = document.querySelector(".addToBillBtn");
    var callsTotalElem = document.querySelector(".callTotalOne");
    var smsTotalElem = document.querySelector(".smsTotalOne");
    var totalCostElem = document.querySelector(".totalOne");
    

    var templateSource = document.querySelector(".userTemplate").innerHTML;
    
    var userTemplate = Handlebars.compile(templateSource);
    var myData = document.querySelector(".userData");

    //creating an instance to have access to my factory function
    let instance = TextBill();
     
    textBillTemp();

    function textBillTemp(){
        
        instance.Calculate(billTypeTextElem.value);
        var colourChanger = instance.colourIndicator();

        var bars = userTemplate({

            call: "R" + instance.getCall(),
            sms:  "R" + instance.getSms(),
            total: "R" + instance.billtotal(),
            colourChanger
        })
        myData.innerHTML = bars;

}


textTotalAddBtn.addEventListener('click', textBillTemp)