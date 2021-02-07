
const checkOne = document.getElementById('checkOne');
const checkTwo = document.getElementById('checkTwo');
//const submit = document.getElementById('submit');
const borderRed = document.querySelectorAll('.input_flex-checkbox');

let flagA = false
let flagB = false

const check_error = document.getElementById('check_error');
const checkTwo_error = document.getElementById('checkTwo_error');
const checkThree_error = document.getElementById('checkThree_error');

function validated() {
    if (checkOne.checked === true && checkTwo.checked === true) {
        return true
    } else if (checkOne.checked === false && checkTwo.checked === false) {
        check_error.style.display = "block";
        checkTwo_error.style.display = "none";
        checkThree_error.style.display = "none";
        borderRed[0].style.border = '4px solid transparent';
        borderRed[1].style.border = '4px solid transparent';
        return false
    } else if (checkOne.checked === true) {
        if (flagA === false) {
            check_error.style.display = "none";
            checkTwo_error.style.display = "none";
            checkThree_error.style.display = "block";
            borderRed[0].style.border = '4px solid transparent';
            borderRed[1].style.border = '4px solid red';
            flagA = true;
            return false
        } else {
            return true
        }
    } else if (checkTwo.checked === true) {
        if (flagB === false) {
            check_error.style.display = "none";
            checkTwo_error.style.display = "block";
            checkThree_error.style.display = "none";
            borderRed[1].style.border = '4px solid transparent';
            borderRed[0].style.border = '4px solid red';
            flagB = true;
            return false
        } else {
            return true
        }
    }
}

//submit.addEventListener('click', validated);