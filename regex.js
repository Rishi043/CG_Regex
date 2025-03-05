function validatePin(pin) {
    const pinPattern = /^(?![A-Za-z])\d{3}\s?\d{3}(?![A-Za-z])$/;
    if (pinPattern.test(pin)) {
        console.log(`Valid PIN: ${pin}`);
        return true;
    } else {
        console.error(`Invalid PIN: ${pin}`);
        return false;
    }
}

// PinCode UC-1
validatePin("400088");        // Valid PIN: 400088

// PinCode UC-2 
validatePin("A400088");       // Invalid PIN: A400088 

// PinCode UC-3
validatePin("400088B");      // Invalid PIN: 400088B

// PinCode UC-4 
validatePin("400 088");      // Valid PIN: 400 088