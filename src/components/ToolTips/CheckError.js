function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

export const CheckError = (inputValue, nameState, setState, requiredTitle) => {
    if(!isNumeric(inputValue)) {
        setState("Please enter the number");
    }else {
        switch(nameState) {
            case 'humidity':
                if(inputValue < -10 || inputValue > 10) {
                    setState("Please enter "+nameState+ " in the space"+requiredTitle);
                }else {
                    setState("");
                }
                break;
            case 'moisture' :
                if(inputValue < -10 || inputValue > 10) {
                    setState("Please enter "+nameState+ " in the space"+requiredTitle);
                }else {
                    setState("");
                }
                break;
        }
    }
}
