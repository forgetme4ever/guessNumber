//lesson06
//guess a Number from 1 to 100


const myNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 6;
let msg = "Guess a number from 1 to 100";

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const gameOver = () => {
    alert("Game Over")
}

const asking = (guess) => {
      
    guess = prompt(msg);
    
    if(guess == null) {
        return gameOver();
    }
    
    const game = (guess) => {
        if (guess == myNumber) {
            alert('YES! That was my number');
        } else if (guess > myNumber) {
            msg = 'No. The number is less';
            asking(msg);
        } else if (guess < myNumber) {
            msg = 'No. My number is bigger';
            asking(msg);
        } else {
            msg = 'Please input a NUMBER';
            asking(msg);
        }
    }
    game(guess)
}

asking(guess);
