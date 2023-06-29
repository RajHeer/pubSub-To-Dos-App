export default function validateTaskForm() {
    const inputs = document.querySelectorAll('input');
    const submitBTN = document.querySelector('#submit');

    submitBTN.addEventListener('click', validate);

    function validate (e) {
        inputs.forEach(input => {
            const inputError = input.nextElementSibling;
            inputError.className = 'error';
            if (!input.validity.valid) {
                e.preventDefault();
                showError(input);
            }
            input.addEventListener('input', () => {
                if (input.validity.valid) {
                  inputError.textContent = '';
                } else {
                  showError(input);
                }
              })
        });   
    };

    function showError(input) {
        const inputError = input.nextElementSibling;
        if (input.validity.valueMissing) {
            inputError.textContent = 'Required';
        } else if (input.validity.typeMismatch) {
            inputError.textContent = 'Incorrect format';
        } else if (input.validity.patternMismatch) {
            inputError.textContent = 'Eleven digits'
        }
    };
}
