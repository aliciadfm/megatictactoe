createBoard();


// printing the 9x9 board
function createBoard() {
    let bigbox = document.getElementById("bigbox");
    for(let i = 1; i <= 9; i++) {
        let quadrant = document.createElement('div');
        quadrant.className = 'quadrant';
        quadrant.id = i;
        for(let j = 1; j <= 9; j++) {
            let subQuadrant = document.createElement('div');
            subQuadrant.className = 'quadrant';
            subQuadrant.id = i*j;
            quadrant.appendChild(subQuadrant);
        }
        bigbox.appendChild(quadrant);
    }
}

