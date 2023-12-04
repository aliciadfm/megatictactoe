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

function playing() {
    let bigbox = document.getElementById('bigbox');
    let turntext = document.getElementById('turntext');
    bigbox.addEventListener('click', function () {
        let subQuadrant = event.target;
        if (subQuadrant.classList.contains('quadrant')) {
            if(subQuadrant.textContent !== "") {
            } else if(count % 2 === 0) {
                turntext.innerHTML = 'O';
                subQuadrant.textContent = "X";
                count++;
            } else {
                turntext.innerHTML = 'X';
                subQuadrant.textContent = "O";
                count++;
            }
        }
        if(isWin()) {
            turntext.innerHTML = "win";
        }

        function shadow () {
            let k = subQuadrant.id;
            let v = k.charAt(k.length-1);
            for(let i = 1; i <= 9; i++) {
                if(i == v) {
                    document.getElementById(i.toString()).style.filter = 'brightness(1)';
                } else {
                    document.getElementById(i.toString()).style.filter = 'brightness(0.85)';
                }
            }

        }

        shadow();
    });
}

function isWin() {
    //Check all rows
    for(let i = 1; i <= 9; i++) {
        //Check all rows
        if(document.getElementById(i + "1").innerHTML !== "" &&
            document.getElementById(i + "1").innerHTML === document.getElementById(i + "2").innerHTML &&
            document.getElementById(i + "2").innerHTML === document.getElementById(i + "3").innerHTML) {
            return true;
        }
        if(document.getElementById(i + "4").innerHTML !== "" &&
            document.getElementById(i + "4").innerHTML === document.getElementById(i + "5").innerHTML &&
            document.getElementById(i + "5").innerHTML === document.getElementById(i + "6").innerHTML) {
            return true;
        }
        if(document.getElementById(i + "7").innerHTML !== "" &&
            document.getElementById(i + "7").innerHTML === document.getElementById(i + "8").innerHTML &&
            document.getElementById(i + "8").innerHTML === document.getElementById(i + "9").innerHTML) {
            return true;
        }

        //Check all columns
        if(document.getElementById(i + "1").innerHTML !== "" &&
            document.getElementById(i + "1").innerHTML === document.getElementById(i + "4").innerHTML &&
            document.getElementById(i + "4").innerHTML === document.getElementById(i + "7").innerHTML) {
            return true;
        }
        if(document.getElementById(i + "2").innerHTML !== "" &&
            document.getElementById(i + "2").innerHTML === document.getElementById(i + "5").innerHTML &&
            document.getElementById(i + "5").innerHTML === document.getElementById(i + "8").innerHTML) {
            return true;
        }
        if(document.getElementById(i + "3").innerHTML !== "" &&
            document.getElementById(i + "3").innerHTML === document.getElementById(i + "6").innerHTML &&
            document.getElementById(i + "6").innerHTML === document.getElementById(i + "9").innerHTML) {
            return true;
        }

        //Check all diagonals
        if(document.getElementById(i + "1").innerHTML !== "" &&
            document.getElementById(i + "1").innerHTML === document.getElementById(i + "5").innerHTML &&
            document.getElementById(i + "5").innerHTML === document.getElementById(i + "9").innerHTML) {
            return true;
        }
        if(document.getElementById(i + "3").innerHTML !== "" &&
            document.getElementById(i + "3").innerHTML === document.getElementById(i + "5").innerHTML &&
            document.getElementById(i + "5").innerHTML === document.getElementById(i + "7").innerHTML) {
            return true;
        }
    }
    return false;
}

