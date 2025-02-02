

export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR-DISPLAY";
export const MPLUS = 'M+';
export const MR = "MR";
export const MC = "MC";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (op) => {
    return({type:CHANGE_OPERATION, payload: op})
}

export const clearDisplay = () => {
    return( {type:CLEAR_DISPLAY})
}