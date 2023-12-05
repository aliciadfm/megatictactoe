createBoard();
playing();


var count = 0;
// printing the 9x9 board
function createBoard() {
    let bigbox = document.getElementById("bigbox");
    for(let i = 1; i <= 9; i++) {
        let quadrant;
        quadrant = document.createElement('div');
        quadrant.className = 'quadrant';
        quadrant.id = i;
        for(let j = 1; j <= 9; j++) {
            let subQuadrant;
            subQuadrant = document.createElement('div');
            subQuadrant.className = 'quadrant';
            subQuadrant.id = i.toString() + j.toString();
            quadrant.appendChild(subQuadrant);
        }
        bigbox.appendChild(quadrant);
    }
}

let actualQuadrant;
let brightQuadrant;
function playing() {
    let bigbox = document.getElementById('bigbox');
    let turntext = document.getElementById('turntext');
    bigbox.addEventListener('click', function () {
        let temp;
        let subQuadrant = event.target;
        actualQuadrant = subQuadrant.closest(".quadrant");
        actualQuadrant = actualQuadrant.id.charAt(0);
        if (subQuadrant.classList.contains('quadrant')) {
            if(subQuadrant.textContent !== "") {
            } else if(count % 2 === 0) {
                turntext.innerHTML = 'O';
                temp = "X";
                subQuadrant.textContent = "X";
                shadow(subQuadrant);
            } else {
                turntext.innerHTML = 'X';
                temp = "O";
                subQuadrant.textContent = "O";
                shadow(subQuadrant);
            }
            count++;
        }
        if(isWin()) {
            for(let i = 1; i <= 9; i++) {
                document.getElementById(actualQuadrant + i).style.display = 'none';
            }
            document.getElementById(actualQuadrant).innerHTML = temp;
        }
    });
}

function isWin() {
    for (let i = 1; i <= 9; i++) {
        if (checkLine(i + "1", i + "2", i + "3") ||
            checkLine(i + "4", i + "5", i + "6") ||
            checkLine(i + "7", i + "8", i + "9") ||
            checkLine(i + "1", i + "4", i + "7") ||
            checkLine(i + "2", i + "5", i + "8") ||
            checkLine(i + "3", i + "6", i + "9") ||
            checkLine(i + "1", i + "5", i + "9") ||
            checkLine(i + "3", i + "5", i + "7")) {
            return true;
        }
    }
    return false;
}

function checkLine(cell1, cell2, cell3) {
    let element1 = document.getElementById(cell1);
    let element2 = document.getElementById(cell2);
    let element3 = document.getElementById(cell3);

    return (element1 && element2 && element3 &&
        element1.innerHTML !== "" &&
        element1.innerHTML === element2.innerHTML &&
        element2.innerHTML === element3.innerHTML);
}

function shadow (subQuadrant) {
    let k = subQuadrant.id;
    let v = k.charAt(k.length-1);
    for(let i = 1; i <= 9; i++) {
        if(i == v) {
            document.getElementById(i.toString()).style.filter = 'brightness(1)';
            brightQuadrant = document.getElementById(i);
        } else {
            document.getElementById(i.toString()).style.filter = 'brightness(0.85)';
        }
    }

}

function getBrightness(element) {
    // Obtén el valor actual del estilo filter
    let filterValue = window.getComputedStyle(element).getPropertyValue('filter');
    return filterValue.trim(); // Elimina espacios en blanco adicionales
}