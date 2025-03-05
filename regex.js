// Function to validate pin code
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


// Function to validate email address
function validateEmail(email) {
    // Regular expression for full email validation (UC-1 to UC-5)
    const emailPattern = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-z]{2})?$/;

    // Checking if email matches the pattern
    if (emailPattern.test(email)) {
        console.log(`Valid Email: ${email}`);
    } else {
        console.log(`Invalid Email: ${email}`);
    }
} 

// Email UC-1 
validateEmail("abc@bridgelabz.co");        // Valid Email:  

// Email UC-2
validateEmail("abc.xyz@bridgelabz.co.in"); // Valid Email: 
validateEmail("abc@xyz.co.in");            // Invalid Email: 

// Email UC-3
validateEmail("abc@bridgelabzcom");        // Invalid Email: 

// Email UC-4
validateEmail("abc.@bridgelabz.co.in");    // Invalid Email: 

// Email UC-5 
validateEmail("abcxyz@bridgelabz.co.abc"); // Invalid Email: