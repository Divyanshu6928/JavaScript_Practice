function transfer(ta,ta1,wa){
    if(ta1=="tap to pay" && wa<=20000){
        if(wa>ta){
            console.log("Insufficient balance");
        }
        else if(wa<ta){
            let left=0;
            left+=ta-wa;
            console.log("Left balance",left);
        }
        else{
            console.log("Balance : 0");
        }
    }
    else if(ta1=="UPI" && wa<=50000){
         if(wa>ta){
            console.log("Insufficient balance");
        }
        else if(wa<ta){
            let left=0;
            left+=ta-wa;
            console.log("Left balance",left);
        }
        else{
            console.log("Balance : 0");
        }
    }
    else if(ta1=="ATM" && wa<=25000){
        if(wa>ta){
            console.log("Insufficient balance");
        }
        else if(wa<ta){
            let left=0;
            left+=ta-wa;
            console.log("Left balance",left);
        }
        else{
            console.log("Balance : 0");
        }
    }
    else{
        console.log("Limit Exceeded");
    }
}


let total_amt=150000;
// Cases
// transfer==withdrawal
// tap to pay
// UPI
// ATM
// credited 
let type_amt="transfer";
let type1_amt="UPI";
let wid_amt=40000;
if(type_amt=="transfer"){
    transfer(total_amt,type1_amt,wid_amt);
}

