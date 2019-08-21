function TextBill(){

    var smsTotal = 0;
    var callTotal = 0;
    var totalBill = 0;
   

    function Calculate(param){
       if(param === "call"){
         callTotal += 2.75;
       }
       else if(param === "sms"){
         smsTotal += 0.75;
       }
       totalBill = callTotal + smsTotal;
    }

    function getSms(){
      return smsTotal.toFixed(2);
    }
    function getCall(){
      return callTotal.toFixed(2);
    }
    function billtotal(){
      return totalBill.toFixed(2);
    }

    function colourIndicator(){

       if(totalBill >= 50){
        return "danger";
       }

    else if(totalBill >= 30){
       return "warning";
      } else {
        return "";
      }
    }
    
    return{
      Calculate,
      getSms,
      getCall,
      billtotal,
      colourIndicator
    }
}