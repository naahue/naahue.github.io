document.getElementById('exp_date').addEventListener('input', function (e) {
    var target = e.target;
    var value = target.value;
    var position = target.selectionEnd;
    var length = value.length;

    if (length === 2 && position === 2 && parseInt(value) > 12) {
        target.value = '12'; 
    }

    if (length === 5 && position === 5) {
        var currentYear = new Date().getFullYear() % 100;
        var enteredYear = parseInt(value.slice(3));

        if (enteredYear < currentYear || enteredYear > currentYear + 10 || value.slice(3).length > 2) {
            target.value = value.slice(0, 3) + currentYear;
        }
    }

    if (length === 2 && position === 2 && !value.includes('/')) {
        target.value += '/';
    }

    if (length > 5 && value.indexOf('/') !== value.lastIndexOf('/')) {
        target.value = value.slice(0, 3) + value.slice(4);
    }

    if (length === 6) {
        target.value = value.slice(0, 5);
    }
});

document.getElementById('cvv').addEventListener('input', function (e) {
    var target = e.target;
    var value = target.value;
    
    if (value.length > 3) {
        target.value = value.slice(0, 3);
    }
});


document.getElementById('card_number').addEventListener('input', function (e) {
    var target = e.target;
    var value = target.value.replace(/\s+/g, ''); 
    var formattedValue = value.replace(/\d{4}(?=.)/g, '$& '); // Insertar espacio después de cada grupo de cuatro dígitos
    
    if (value.length > 19) {
        target.value = formattedValue.slice(0, 19); 
    } else {
        target.value = formattedValue;
    }
});

document.getElementById('card_number').addEventListener('keydown', function (e) {
    var target = e.target;
    var value = target.value.replace(/\s+/g, ''); 
    
    if (value.length === 16 && e.key !== 'Backspace') {
        e.preventDefault();
    }

    if (!/^\d$/.test(e.key) && e.key !== 'Backspace') {
        e.preventDefault();
    }
});

document.getElementById('zip').addEventListener('input', function (e) {
    var target = e.target;
    var value = target.value.replace(/\D/g, ''); 

    target.value = value;

    if (value.length > 4) {
        target.value = value.slice(0, 6);
    }
});


document.getElementById('dni').addEventListener('input', function (e) {
    var target = e.target;
    var value = target.value.replace(/\D/g, ''); 

    target.value = value;

    if (value.length > 8) {
        target.value = value.slice(0, 8);
    }
});


document.getElementById('card_name').addEventListener('input', function (e) {
    var target = e.target;
    var value = target.value.replace(/[^a-zA-Z ]/g, '');

    target.value = value;
});