function playDicegame(){
            // variables to hold our first roll of the die
            let roll1 = GetRandomNumber();

            console.log("roll1 =", roll1);
            
             // variables to hold our second roll of the die
            let roll2 = GetRandomNumber();

            console.log("roll2 =", roll2);

            // variables to hold the sum of our rolls
            let rollsum = roll1 + roll2;

            console.log("rollsum =", rollsum)

            // test for a win - duplicate even numbers = 2, 2 or 4, 4 or 6, 6
            // % is the modulus - the result when using modulus is the remainder
            // if you divide a number by 2 and there is no remainder, then the number is even
            if(roll1 == roll2 && roll1 % 2 == 0){
                // update the message div with the good news that the round was a win
                document.getElementById("DivMessage").textContent = "You win!";

            }
            // if the user rolls a 7 or 11, they lost
            else if(rollsum == 7 || rollsum == 11){

                document.getElementById("DivMessage").textContent = "Sorry... You Lose...";
            }

            // else is the catch all - if any other combination of dice roll happened,
            // it was a tie
            else{
                document.getElementById("DivMessage").textContent = "You Tied (Pushed)!";
            }


            document.getElementById("DivRoll1").textContent = " Dice Roll 1: " + roll1;
            document.getElementById("DivRoll2").textContent = " Dice Roll 2: " + roll2;
            document.getElementById("DivSum").textContent = "Sum: " + rollsum;
        }


        //this function will roll a random number between 1 and 6
        function GetRandomNumber(){
            // get a random number between 0 and 1 and multiply it by 6
            let number = Math.random() * 6;

            // this will round our number down, adding 1 so we get a number between 1 and 6 rather than getting decimals or a zero
            number = Math.floor(number) + 1;

            // returning / passing back the random number
            return number;
        }