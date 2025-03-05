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