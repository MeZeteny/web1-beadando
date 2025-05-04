document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;
    let messages = [];

    const firstName = document.querySelector('input[aria-label="First name"]');
    const lastName = document.querySelector('input[aria-label="Last name"]');
    const email = document.getElementById('exampleFormControlInput1');
    const megye = document.getElementById('validationCustom04');
    const velemeny = document.getElementById('exampleFormControlTextarea1');

    // Segédfüggvény szövegekhez
    function checkLength(input, fieldName) {
        if (input.value.trim().length < 10) {
            isValid = false;
            messages.push(`${fieldName} legalább 10 karakter legyen.`);
        }
    }

    function checkLengthKisebb(input, fieldName) {
        if (input.value.trim().length < 3) {
            isValid = false;
            messages.push(`${fieldName} legalább 3 karakter legyen.`);
        }
    }

    // Név ellenőrzése
    checkLengthKisebb(firstName, "Vezetéknév");
    checkLengthKisebb(lastName, "Keresztnév");

    // Email ellenőrzése
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        messages.push("Az email cím formátuma nem megfelelő.");
    }

    // Megye kiválasztás ellenőrzése
    if (megye.value === "") {
        isValid = false;
        messages.push("Válasszon megyét.");
    }

    // Vélemény ellenőrzése
    checkLength(velemeny, "Üzenet");

    if (isValid) {
        alert("Sikeres beküldés! Köszönjük a véleményét.");
        this.submit(); // ha minden rendben, küldi az űrlapot
    } else {
        alert(messages.join('\n'));
    }
});
