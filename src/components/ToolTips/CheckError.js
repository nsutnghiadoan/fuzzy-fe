export const CheckError = (inputValue, nameState, setState) => {
    switch(nameState) {
        case 'humidity':
            if(inputValue == 10) {
                console.log(1);
                setState(1);
            }
            break;
        case 'moisture' :
            if(inputValue == 5) {
                console.log(2);
            }
            break;
    }
}