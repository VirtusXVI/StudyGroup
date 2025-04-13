export const inputSanitizer = (input) => {
    return input.replace(/[^a-zA-Z0-9\s]/g, '');
};

export const emailValidator = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(input.trim()) ? input : false;
};