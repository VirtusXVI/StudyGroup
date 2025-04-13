export const nameValidator = (input) => {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/;
    
    return nameRegex.test(input.trim()) ? input : false;
};

export const emailValidator = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(input.trim()) ? input : false;
};

export const passwordValidator = (input) => {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{8,}$/;
    
    return passwordRegex.test(input.trim()) ? input : false;
};