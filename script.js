createBoard();
placePiece();


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

function placePiece() {
    let bigbox = document.getElementById("bigbox");
    bigbox.addEventListener('click', function () {
        let subQuadrant = event.target;
        if (subQuadrant.classList.contains('quadrant')) {
            subQuadrant.textContent.className = 'piece';
            if(subQuadrant.textContent !== "") {
            } else if(count % 2 === 0) {
                subQuadrant.textContent = "X";
                count++;
            } else {
                subQuadrant.textContent = "O";
                count++;
            }

        }
    });

}

