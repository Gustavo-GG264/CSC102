function playDicegame(){
            // variables to hold our first roll of the die
            let roll1 = GetRandomNumber(6, false);

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


        //this function will roll a random number between 1 and max
        function GetRandomNumber(max, includeZero){
            // get a random number between 0 and 1 and multiply it by max
            let number = Math.random() * max;

            // this will round our number down, so we get a number between 0 and max (inclusive)
            if (includeZero){
                number = Math.floor(number)
            }
            else{number = Math.floor(number) + 1;

            }


            // this will round our number down, adding 1 so we get a number between 1 and max rather than getting decimals or a zero
            number = Math.floor(number) + 1;

            // returning / passing back the random number
            return number;
        }

            // build a function to get a random number
            function getRandomPixel(){
            // im picking 800 as the max number - adjust accordingly based on your screen
            return Math.floor(Math.random() * 900)

        }




        
// this function will validate the user input based on the requirements of 
// the client (assignment requirements)
function validate(){
    // first name variable
    let firstname = document.getElementById("txtfirstname").value;

    // show the first name in the console
    console.log("firstname=" + firstname);

        // Last name name variable
    let lastname = document.getElementById("txtlastname").value;

    // show the Last name in the console
    console.log("lastname=" + lastname);

    // zipp code variable
    let zip = document.getElementById("txtZip").value;

        // show the zip code in the console
    console.log("zip=" + zip);

    // create a variable to hold the first name + " " + last name
    let fullname = firstname + " " + lastname;

    console.log("fullname=" + fullname)

    // create a vaariable to hold the message we will show to the user
    let message = ""

    // we want to make sure the full name does not exceed 20 characters
    if (fullname.length == 1 || fullname.length > 20){
        message = "Please enter a name that is less than 20 characters";
    }
    // the zip code can only have 5 characters
    else if(zip.length != 5){
        message = "Please enter a 5 digit zip code";
    }
    // otherwise the user has entered everything correctly, and they get
    // the secret word
    else{
        message = "Congratulations! you entered everything correctly, the secret word is: User Validation";
    }



    console.log("message=" + message);

    // display the message on the associate div
    document.getElementById("divmessage").textcontent = message;
}


  // create a variable to track the current interval ID (returned from the setInterval)
       let intervalId = 0;
        // create the function to move the image
        function StartImageanimation(){
            // we are creating a variable that is a shortcut/nickname for our HTML image
            let memeImage = document.getElementById("memeImage");

            //setInterval allows us to repeatedly run code
            // function(){} is an anonymous function - a way to run a chunk of code 1
            // time as a function argument
            intervalId = setInterval(function(){

                let topCord = getRandomPixel(901, true);
                let leftCord = getRandomPixel(901, true);

                memeImage.style.left = leftCord + "px";
                memeImage.style.top = topCord + "px";
            },800); // 1000 milliseconds = 1 second

           

            // enable the stop button == can click on stop button
            document.getElementById("btnStop").disabled = false;

            // disable the start button == cannot click on start button
            document.getElementById("btnStart").disabled = true;

        }


        // create function that stops image
        function StopImageanimation(){
            // call a built in Javascript function that stops the setinterval from running
            clearInterval(intervalId);

            // disable the stop button == can click on stop button
            document.getElementById("btnStop").disabled = true;

            // enable the start button == cannot click on start button
            document.getElementById("btnStart").disabled = false;



        }


        // build a function to get a random number
        function getRandomPixel(){
            // im picking 800 as the max number - adjust accordingly based on your screen
            return Math.floor(Math.random() * 900)

        }



// Palindrome checker code
 // create the checkPalin function
    function CheckPalin(event){
        // prevent the form from submitting (so the page does not refresh)
        event.preventDefault();

        // create a variable to store the word that the user entered
        let wordtoTest = document.getElementById("txtword").value;

        console.log("wordtotest=" + wordtoTest)

         // call the function to test it
        // tODO: print out the result to the user
        let bPalin = isPalin(wordtoTest);

        // create a shortcut to the message div
        let divMessage = document.getElementById("divmessage");


         // create a message for the user based on the value of bPalin
        if(bPalin){ // if(bPalin) is equivalent to if(bPalin == true)
            // show the user a message
             divmessage.textContent = "The phrase is a Palindrome!";
        }
        else{
            divmessage.textContent = "The phrase is not a Palindrome!";
    }
    
    }
    

    // create a function to see if a string is the same backwards and forwards
    function isPalin(strtoTest){
        // i want to convert the string to all lowercase so that it is a more fair comparison
        strtoTest = strtoTest.toLowerCase();
        // replace all instances /g of spaces /\s with empty string
        strtoTest = strtoTest.replace(/\s/g, "");

        console.log("strtoTest=" + strtoTest)

        // create a new variable so you can keep the original string for testing
        let stringreverse = strtoTest;

        // convert the reverse string to an array, we will reverse the contents 
        // so test would become tset and then convert the array back to a string
        stringreverse = stringreverse.split("").reverse().join("");

        console.log("strtoTest=" + stringreverse)

        // compare the orginal string with the reversed string
        // if they match, this function will return true, otherwise it will return
        // false
        if (stringreverse == strtoTest){
            return true;
        }
        // if we get to this line, it must not have been a palindrome, so return 
        // false; this is equivalent to the else above  - include only 1 or the other
        else{
            return false;
        }
    }



        