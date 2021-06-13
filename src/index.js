const DECIMAL_FEE = 0.0150;
const FEE_CAP = 2000;
const FLAT_FEE = 100;

const calculateFor2500Below = (amount) => {
    const applicableFees = DECIMAL_FEE * amount;

    if(applicableFees>FEE_CAP){
        return amount+FEE_CAP;
    }else{
        return ((amount)/(1-(DECIMAL_FEE)))+0.01;
    }
}

const calculateFor2500Above = (amount) => {
    const applicableFees = (DECIMAL_FEE * amount)+FLAT_FEE;

    if(applicableFees>FEE_CAP){
        return amount+FEE_CAP;
    }else{
        return ((amount+FLAT_FEE)/(1-(DECIMAL_FEE)))+0.01;
    }
}

export const calculateTotalPrice = (amount) => {
    const amt = amount;
    if(amt<100){
        return Math.round(amt+1);
    }else if(amt<2500){
        return Math.round(calculateFor2500Below(amt));
    }else{
        return Math.round(calculateFor2500Above(amt));
    }
}