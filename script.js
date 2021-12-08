//lesson06
//guess a Number from 1 to 100

const game = () => { 
    const myNumber = Math.floor(Math.random() * 100) + 1;

    const asking = (msg) => {
        msg = msg || "Guess a number from 1 to 100";
        const guess = prompt(msg);
        
        if(guess === null) {
            alert ('Game Over');
            return;
        } else if (+guess === myNumber) {
            alert('YES! That was my number');
        } else if (+guess > myNumber) {
            msg = 'No. The number is less';
            asking(msg);
        } else if (+guess < myNumber) {            
            msg = 'No. My number is bigger';
            asking(msg);
        } else {
            msg = 'Please input a NUMBER';
            asking(msg);
        }
}   
    return asking;
}
game()();

