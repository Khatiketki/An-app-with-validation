document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const successMessage = document.getElementById("successMessage");
    const usResidentCheckbox = document.getElementById("usResident");
    const zipcodeField = document.getElementById("zipcode");
    const zipcodeLabel = document.getElementById("zipcodeLabel");

    usResidentCheckbox.addEventListener("change", () => {
        if (usResidentCheckbox.checked) {
            zipcodeField.classList.remove("hidden");
            zipcodeLabel.classList.remove("hidden");
            zipcodeField.setAttribute("required", "required");
        } else {
            zipcodeField.classList.add("hidden");
            zipcodeLabel.classList.add("hidden");
            zipcodeField.removeAttribute("required");
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let formIsValid = validateForm();

        if (formIsValid) {
            successMessage.classList.remove("hidden");
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        
        // Name Validation
        const name = document.getElementById("name");
        const nameError = document.getElementById("nameError");
        if (name.value.length < 3) {
            nameError.textContent = "Name must be at least 3 characters.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Year of Birth Validation
        const birthYear = document.getElementById("birthYear");
        const birthYearError = document.getElementById("birthYearError");
        const currentYear = new Date().getFullYear();
        if (birthYear.value < 1901 || birthYear.value >= currentYear || isNaN(birthYear.value)) {
            birthYearError.textContent = `Year must be between 1901 and ${currentYear - 1}.`;
            isValid = false;
        } else {
            birthYearError.textContent = "";
        }

        // Zipcode Validation
        const zipcode = document.getElementById("zipcode");
        const zipcodeError = document.getElementById("zipcodeError");
        if (usResidentCheckbox.checked && !/^\d{5}$/.test(zipcode.value)) {
            zipcodeError.textContent = "Zipcode must be a 5-digit number.";
            isValid = false;
        } else {
            zipcodeError.textContent = "";
        }

        // Password Validation
        const password = document.getElementById("password");
        const passwordError = document.getElementById("passwordError");
        if (password.value.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters.";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        // Pizza Preference Validation
        const pizzaPreferenceError = document.getElementById("pizzaPreferenceError");
        const pizzaOptions = document.querySelectorAll("input[name='pizzaPreference']:checked");
        if (pizzaOptions.length === 0) {
            pizzaPreferenceError.textContent = "Please select your pizza preference.";
            isValid = false;
        } else {
            pizzaPreferenceError.textContent = "";
        }

        return isValid;
    }
});
