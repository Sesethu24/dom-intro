function radioBtnBill(){

    var smsTot = 0;
    var callTot = 0;
    var bill = 0;
   

    function radioFactory(params){
       if(params === "call"){
         callTot += 2.75;
       }
       else if(params === "sms"){
         smsTot += 0.75;
       }
       bill = callTot + smsTot;
    }

    function getSmsCost(){
      return smsTot.toFixed(2);
    }
    function getCallCost(){
      return callTot.toFixed(2);
    }
    function billTotal(){
      return bill.toFixed(2);
    }

    function colour(){

       if(bill >= 50){
        return "danger";
       }

    else if(bill >= 30){
       return "warning";
      } else {
        return "";
      }
    }
    
    return{
      radioFactory,
      getSmsCost,
      getCallCost,
      billTotal,
      colour
    }
}