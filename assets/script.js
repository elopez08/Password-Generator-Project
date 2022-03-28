// Get the modal
var modal = document.getElementById("myModal");

//Declaring 2nd modal inside the button
var qmodal = document.getElementById("questionModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the password generator.  Declare it first with a var

var finalpasswordoutcome = document.getElementById("passwordgenerated"); //This is from the HTML underneath the Open Modal button

//Declaration of state:
var wordsentence = 0;

//For the label
var input = document.querySelector("label");
var log = document.getElementById("userinput");


//Message for the "p"
var mainEl = document.getElementById('main'); //Remember this is locking on the main in the 'p' on the HTML

//New button
var btnback = document.getElementById("myBtnback");
var btnnext = document.getElementById("myBtnnext");

//Yes and No button
var btnyes = document.getElementById("btninputyes");
btnyes.style.display = "none";
console.log("The current state of the btnyes is: " + btnyes.style.display);
var btnno = document.getElementById("btninputno");
btnno.style.display = "none";

//Making a label ID
var usernumberlabel = document.getElementById("usernumber");
usernumberlabel.style.display = "none";


//Var enable for the Yes and No
var i = 0;
var randomnumber = 0;
var randompasswordgen = "";
var lowenable = 0;
var highenable = 0;
var numenable = 0;
var specialenable = 0;
var result = lowenable+highenable+numenable+specialenable;

var randomnumberpicker = 0;
console.log("The current result of the variances is: " + result);

//List of the characters in their category
var wordsselected = "";
var lowercaseletters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericchar = '0123456789';
var specialchar = '~!@#$%^&*()`-_=+[]\{}|';
//Spliting the characters when we have it enabled.
//var words = message.split('');

//I'm making a password generator declaration here:
var passwordgenerator = "";
var passwordaddedlist = "";

//Testing to see if it works:
var wordsaddedtogether = lowercaseletters + uppercaseletters + numericchar + specialchar;
console.log("The Current set of words are: " + wordsaddedtogether);

var numberlength = wordsaddedtogether.length;

console.log("The number of characters in this string is: " + numberlength);

//Sample of random number generator that works:
//var randomnumber = Math.floor(Math.random() * numberlength);
//Defining the randomnumber, we can then add it to here with the given array:
console.log("The " + randomnumber +  " letter from the list is: " + wordsaddedtogether[randomnumber]);


//The length of the password is determined what the input is.  It has to be anywhere from 8-128

//We need to include a series of characters here.  We need the following:

/*
  1. Lower case
  2. Upper case
  3. Numberic
  4. Special
*/

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  wordsentence++;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

//Back button function
btnback.onclick = function() {

  if (wordsentence > 0)
  {

    wordsentence--;
    console.log("Current wordsentence (inside the btnnext, which is clicking the button) :" + wordsentence);

  }
}

//Next button function
btnnext.onclick = function() {
  if(wordsentence==1)
  {
    btnnext.style.display = "none";
    //To make the button visible again, we need to use INITIAL, NOT VISIBLE
    usernumberlabel.style.display = "initial";
    btnyes.style.display = "initial";
    btnno.style.display = "initial";
    console.log("The current state of the btnyes is: " + btnyes.style.display);
    wordsentence++;
    //qmodal.style.display = "block";
    console.log("Current wordsentence (inside the btnnext, which is clicking the button) :" + wordsentence);
  }


}

//Edit for yes button
btnyes.onclick = function() {
  if(wordsentence<10)
  {
    wordsentence++;
    console.log("The button 'Yes' has been clicked. Current wordsentence (inside the btnnext, which is clicking the button) :" + wordsentence);
  }


}

//Edit for no button
btnno.onclick = function() {
  if(wordsentence<10)
  {
    wordsentence++;
    console.log("The button 'No' has been clicked. Current wordsentence (inside the btnnext, which is clicking the button) :" + wordsentence);
  }


}



/*

  This is going to be for the NEXT button.  We need to edit this:

        // When the user clicks the button, open the modal 
      btnnext.onclick = function() {
        qmodal.style.display = "block";
        wordsentence++;
      }

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        qmodal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == qmodal) {
          qmodal.style.display = "none";
        }
      } 

      */


//This is for the series of questions for the window.  We need to do the following:

/*

        1. Clicking on generate password prompts to a series of questions to make a password.
        2. Length of the password between 8 and 128
        3. Have lowercase(?)
        4. Have uppercse(?)
        5. Have numberic(?)
        6. Have special characters(?)
        7. MUST have at least one in it once validated (ex:  If you said yes to a number, password MUST have a number)
        8. Generates a password from the matching criteria
        9. Displayed as an alert or written on page

For this, have the questions for each one.  For example, for 1, how many will there be?

*/

// Displays the message one word at a time
function displayMessage() {

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {

      // If there are no more words left in the message
      if (wordsentence == undefined)
      {
        clearInterval(msgInterval);
      }
      else if (wordsentence == 0)
      {
        modal.style.display = "none";
      }
      //This is to ask on getting the questionnaire
      else if (wordsentence == 1){
        /*
        Default message
         */
        mainEl.textContent = "This window will ask you a few questions on what will be included in your password.  Should you want a certain character in it, don't forget to hit the 'Yes' button.  Otherwise, hit 'no'.  However, one of them requires you to have a number of characters.  Please type in the number anywhere form 8 to 128.";
        console.log("We are in step 1.");
      }
      //This is asking how long is this password?
      else if (wordsentence == 2)
      {
        mainEl.textContent = "How long is this password?  Remember:  It has to be anywhere from 8 to 128.";

        //What is the state of the button?

        console.log("We are in step 2.");

        //I'm going to try and update this:
        input.addEventListener('label', updateValue);

        //also trying to call function
        function updateValue(e) {
          log.textContent = e.target.value;
        }

        console.log(log);

        /*
        if (it isn't a number)
        {
          "What you typed isn't a number.  Please type in a number"
        }
        else if (it's lower than 8)
        {
          That password length is too short.  It has to be greater than 8
        }
        else if (it's higher than 128)
        {
          That password length is too big.  Have it smaller than 128
        }
         */

      }
      //Is it going to have lowercase?
      else if (wordsentence == 3)
      {
        //Trying to call function
        console.log(log);

        mainEl.textContent = "Will this sequence have a lowercase?";
        usernumberlabel.style.display = "none";

        console.log("We are in step 3.");
        //What is the current state of yes and no?
        btnyes.onclick = function() {
          lowenable = 1;
          wordsentence++;
          console.log("The state of the lowenable is: " + lowenable);
        }
        btnno.onclick = function(){
          lowenable = 0;
          wordsentence++;
          console.log("The state of the lowenable is: " + lowenable);
        }
      }

      //Is it going to have an upper case?
      else if (wordsentence == 4)
      {
        mainEl.textContent = "Will this password have an upper case?";

        console.log("We are in step 4.");

        //What is the current state of yes and no?
        btnyes.onclick = function() {
          highenable = 1;
          wordsentence++;
          console.log("The state of the highenable is: " + highenable);
        }
        btnno.onclick = function(){
          highenable = 0;
          wordsentence++;
          console.log("The state of the highenable is: " + highenable);
        }

      }
      //Is it going to have numeric
      else if (wordsentence == 5)
      {
        mainEl.textContent = "Will this password have a numeric character?";

        console.log("We are in step 5.");

        //What is the current state of yes and no?
        btnyes.onclick = function() {
          numenable = 1;
          wordsentence++;
          console.log("The state of the numenable is: " + numenable);
        }
        btnno.onclick = function(){
          numenable = 0;
          wordsentence++;
          console.log("The state of the numenable is: " + numenable);
        }

      }
      //Does it have special characters?
      else if (wordsentence == 6)
      {
        mainEl.textContent = "Will this password have special characters such as ? ! / #?";

        console.log("We are in step 6.");

        //What is the current state of yes and no?
        btnyes.onclick = function() {
          specialenable = 1;
          wordsentence++;
          console.log("The state of the specialenable is: " + specialenable);
        }
        btnno.onclick = function(){
          specialenable = 0;
          wordsentence++;
          console.log("The state of the specialenable is: " + specialenable);
        }

      }
      
      
      //END THIS HERE CAUSE THERE WILL BE NO QUESTIONS ASKED
      else if (wordsentence == 7)
      {
        console.log("This is what we have as a result after putting in on the options: " + result);
        mainEl.textContent = "We have the following:  Generate this password?";
        console.log("We are in step 7.");
      }

      else if (wordsentence == 8)
      {

        result = lowenable+highenable+numenable+specialenable;
        console.log(result);
        
        

        //We need to have a function that will set up the password.  The length depends on what the user typed on the last step
        //array = what did the user type in?

        //If we have nothing enable, we need to let it know that it can't be done.  Try again


        //Setting up the timer for the function.  I'm going to set this in one second so it'll 'generate' the password

        //Making a time delay for one second.  This function is if all the statements are untrue.
        //If we do have all the statements not true, go back to the last step to add a password char string
  

        //Have a delay to show that there's an error with the code
        if (result == 0)
        {
          mainEl.textContent = "Wait... there's not a single character here!  Try again, but this time, put in something or else it will not work!  Go back!"
          /*
          console.log("Wait... there's not a single character here!  Try again, but this time, put in something or else it will not work!  Go back!");
          */
          wordsentence=3;
        }


        /*
        //If all are not 0 (meaning one of them is true), execute this:
        */
        else
        {
          mainEl.textContent = "Generating password...";
          console.log("We are in step 8.");

          //var msgInterval = setInterval(function () 


            //Add all that are true into the string of array.
            if (lowenable == 1)
            {
              wordsselected = wordsselected + lowercaseletters;
              console.log("The current list of letters is: " + wordsselected); //seeing if it added
            }
            if (highenable == 1)
            {
              wordsselected = wordsselected + uppercaseletters;
              console.log("The current list of letters is: " + wordsselected); //seeing if it added
            }
            if (numenable == 1)
            {
              wordsselected = wordsselected + numericchar;
              console.log("The current list of letters is: " + wordsselected); //seeing if it added
            }
            if (specialenable == 1)
            {
              wordsselected = wordsselected + specialchar;
              console.log("The current list of letters is: " + wordsselected); //seeing if it added
            }

            //When we added all of them, we then generate a password.  We need a while loop

            
            //Now we need to generate a string that's completely random.  What is it?
            /*

            //We need to find the length of what the user inputted from the 2nd step 
            //var numberofcharactersinstring = wordsselected.length;

            (We're missing a way for the number to be inputted here from the user)

            */

            
            //THE WHILE LOOP WORKS WITH THE RANDOM NUMBER GENERATOR FOR THE PASSWORD
            //Now we need to change the while loop to equal the length from the user's input
            while (i < 20)
            {
              //var randomnumber = Math.floor(Math.random() * numberofcharactersinstring); (we need this to work from a user's input)
              randomnumberpicker = Math.floor(Math.random() * 70);


              //We're calling a function FROM THE LIST wordsselected with a number "i" in it and applying to the randompasswordgen, which is a string, which started out as ""
              
              console.log("The current list of the function is: " + wordsselected[randomnumberpicker]); //Is the list even there?
              randompasswordgen = wordsselected[randomnumberpicker]; //This is a test to see if we got the string length

              //WE KNOW THIS WORKS
              console.log("The random number letter from the list is: " + randompasswordgen[0]);

              //We're adding a character inside the password generator for as long as the while loop is true
              //We're adding a randompasswordgen, that was extracted from the last command, adding it to the list passwordgenerator, which CURRENTLY is "", and add that to passwordaddedlist, WHICH IS ALSO EMPTY ""
              passwordaddedlist = passwordgenerator + randompasswordgen; //Password generate = +self +a random character from the list
              //We then make the passwordgenerator equal to the current list that was implemented from th last string
              passwordgenerator = passwordaddedlist;
              //Math.floor(Math.random() * 20)
              i++;

            }




            //Move to the last state so that we have things set up again
            wordsentence++;
  
          //}, 100);

        }


      }

      else if (wordsentence == 9)
      {
        wordsentence = 0;

        //When we start over, make this visible again
        btnnext.style.display = "initial";
        //When we start over, have these two buttons invisible again
        btnyes.style.display = "none";
        btnno.style.display = "none";

        console.log("Lowcase state: " + lowenable);
        console.log("Upper case state: " + highenable);
        console.log("Numeric state: " + numenable);
        console.log("Special state: " + specialenable);
        //Going to see if it picked up the statements correctly
        console.log("The Password we generated is the following: " + passwordgenerator);
        modal.style.display = "none";

        //Call upon the function to have it write:
        PasswordGen();
        //Display for the finalpasswordoutcome
        console.log("The final thing for the finalpasswordoutcome is: " + finalpasswordoutcome);
      }

    }, 1000
  );
}


//Display the final password


function PasswordGen()
{
  finalpasswordoutcome.textContent = passwordgenerator;
}

displayMessage();