document.addEventListener('DOMContentLoaded', () => {
    const countDiv = document.getElementById('count');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const clearButton = document.getElementById('clear');
    const errorMessage = document.getElementById('error-message');

    let count = 0;

    incrementButton.addEventListener('click', () => {
        count++;
        updateCount();
    });

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            updateCount();
        } else {
            showError();
        }
    });

    clearButton.addEventListener('click', () => {
        count = 0;
        updateCount();
    });

    function updateCount() {
        countDiv.innerHTML = count;
        errorMessage.style.visibility = 'hidden';

        if (count > 0) {
            clearButton.style.display = 'block';
        } else {
            clearButton.style.display = 'none';
        }
    }

    function showError() {
        errorMessage.style.visibility = 'visible';
    }
});