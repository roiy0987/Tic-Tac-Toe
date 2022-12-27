let clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let sign = 1; // 0 for O, 1 for X

let win = 0;
function update(id) {
    if(win)
        return;
    const data = document.getElementById(id);
    if (clicked[id - 1] == 0) {
        clicked[id - 1] = 1;
        if (sign == 1) {
            data.innerText = 'X';
            sign--;
            if (checkWin())
                win=1;
            return;
        }
        data.innerText = 'O';
        sign++;
        if (checkWin())
            win=1;
    }
}

function clearText() {

    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).innerText = '';
        clicked[i - 1] = 0;
        win=0;
    }
}

function checkWin() {
    return checkDiagnoal() || checkHorizontal() || checkVertical();
}

function checkDiagnoal() {
    if (document.getElementById('1').innerText == document.getElementById('5').innerText && document.getElementById('1').innerText == document.getElementById('9').innerText && document.getElementById('9').innerText != '')
        return true;
    if (document.getElementById('7').innerText == document.getElementById('5').innerText && document.getElementById('5').innerText == document.getElementById('3').innerText && document.getElementById('3').innerText != '')
        return true;
    return false;
}

function checkVertical() {
    if (document.getElementById('1').innerText == document.getElementById('4').innerText && document.getElementById('4').innerText == document.getElementById('7').innerText && document.getElementById('7').innerText != '')
        return true;
    if (document.getElementById('2').innerText == document.getElementById('5').innerText && document.getElementById('5').innerText == document.getElementById('8').innerText && document.getElementById('8').innerText != '')
        return true;
    if (document.getElementById('3').innerText == document.getElementById('6').innerText && document.getElementById('6').innerText == document.getElementById('9').innerText && document.getElementById('9').innerText != '')
        return true;
    return false;
}

function checkHorizontal() {
    if (document.getElementById('1').innerText == document.getElementById('2').innerText && document.getElementById('1').innerText == document.getElementById('3').innerText && document.getElementById('1').innerText != '')
        return true;
    if (document.getElementById('4').innerText == document.getElementById('5').innerText && document.getElementById('5').innerText == document.getElementById('6').innerText && document.getElementById('4').innerText != '')
        return true;
    if (document.getElementById('7').innerText == document.getElementById('8').innerText && document.getElementById('7').innerText == document.getElementById('9').innerText && document.getElementById('7').innerText != '')
        return true;
    return false;
}
