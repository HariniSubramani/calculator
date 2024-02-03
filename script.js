
document.addEventListener('DOMContentLoaded', function () {
    
    const buttons = document.querySelectorAll('.num, .symbol, .lc,.symbols');
    const display = document.querySelector('.zero');
    let expression = '';

    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;

            if (button.classList.contains('lc')) {
                expression = '';
            } else if (button.classList.contains('symbol')) {
                expression += ` ${buttonText} `;
            }else if (button.classList.contains('symbols')) {
                expression += ` ${buttonText} `;
            }
             else if (buttonText === '=') {
                try {
                    expression = eval(expression);
                } catch (error) {
                    expression = 'Error';
                }
            } else {
                
                expression += buttonText;
            }
            display.textContent = expression;
        });
    });
});
