// Get the modal
//This is for the window on the quiz
var modal = document.getElementById(`myModal`);

// Get the button that opens the modal.  Triggers the quesitons
var btn = document.getElementById(`myBtn`);

// Get the <span> element that closes the modal.  AKA, X button
var span = document.getElementsByClassName(`close`)[0];

// Get the password generator.  Declare it first with a var
var finalpasswordoutcome = document.getElementById(`password`); 

//Message for the `p`.  This is for the questions inside the popout window
var mainEl = document.getElementById('main');

//Back/Next button
var btnback = document.getElementById(`myBtnback`);
var btnnext = document.getElementById(`myBtnnext`);

//Submit button
var submitInput = document.getElementById(`submitnumber`);

//Yes and No button
var btnyes = document.getElementById(`btninputyes`);
var btnno = document.getElementById(`btninputno`);

//Making a label ID
var usernumberlabel = document.getElementById(`usernumber`);
usernumberlabel.style.display = `none`;

//For the label
var input = document.querySelector(`label`);
//What's this?
var log = document.getElementById(`userinput`);

//Declaration of state.  This is a public due to multiple buttons being used
var wordsentence;

//Empty string start up when selecting words
var wordsselected = ``;


//I'm making a password generator declaration here:
var passwordgenerator = ``;

//Final password generator
var finalpasswordgenerator = ``;
//Value of the number
var numberofstrings = ``;
//Start of count
var i = 0;

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = `block`;
  //Default displays
  btnyes.style.display = `none`;
  btnno.style.display = `none`;
  usernumberlabel.style.display = `none`;
  btnback.style.display = `initial`;
  btnnext.style.display = `initial`;
  //We're in the first step
  wordsentence = 1;
  //Initiate function
  questionsPassword(); 
}

function questionsPassword() {
    console.log(`This is triggering inside the function`);
    //List of the characters in their category
    var lowercaseletters = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numericchar = '0123456789';
    var specialchar = '~!@#$%^&*()`-_=+[]\{}|';
    submitInput.style.display = `none`;

    var msgInterval = setInterval(function () {
        //Functions of the buttons
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = `none`;
            //Reset the counter
            wordsentence = 0;
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = `none`;
            wordsentence = 0;
            }
        } 
        submitInput.onclick = function() {
            if (usernumberlabel.value < 8 || usernumberlabel.value > 128)
            {
                console.log(`This isn't valid!  Try again!`);
            }
            else
            {
                numberofstrings = usernumberlabel.value;
                wordsentence++;
            }
        }
        //Back button function
        btnback.onclick = function() {
            if (wordsentence > 0)
            {
                wordsentence--;
            }
        }
        //Next button function
        btnnext.onclick = function() {
            if(wordsentence==1)
            {
                btnnext.style.display = `none`;
                wordsentence++;
            }
        }
        //Yes Button Function
        btnyes.onclick = function() {
            switch (wordsentence) {
                case 1:
                    console.log(`Step 1 and the btn was pressed!`);
                    break;
                case 2:
                    console.log(`Step 2 and the btn was pressed!`);
                    break;
                case 3:
                    console.log(`Step 3 and the btn was pressed!
                    We're going to add the lower case statement with the list!`);
                    wordsselected += lowercaseletters;
                    break;
                case 4:
                    console.log(`Step 4 and the btn was pressed!`);
                    wordsselected += uppercaseletters;
                    break;
                case 5:
                    console.log(`Step 5 and the btn was pressed!`);
                    wordsselected += numericchar;
                    break;
                case 6:
                    console.log(`Step 6 and the btn was pressed!`);
                    wordsselected += specialchar;
                    break;
                case 7:
                    console.log(`Step 7 and the btn was pressed!`);
                    //The password gen
                    PasswordGen();
                    modal.style.display = `none`;
                    clearInterval(msgInterval);
                    break;
                case 8:
                    console.log(`Initiate the password generator!`);
                    break;
            }

            if(wordsentence<10)
            {
                wordsentence++;
            }
        }

        //No Button Function
        btnno.onclick = function() {
            if(wordsentence<9)
            {
            wordsentence++;
            }
            if(wordsentence == 8)
            {
                console.log(`You clicked no on wordsentence: ` + wordsentence);
                //Empty the selection
                wordsselected = ``;
                wordsentence = 2;
            }
        }

        if (wordsentence == undefined || wordsentence == 0) {
            clearInterval(msgInterval);
        }

        switch (wordsentence) {
            case 1:
                submitInput.style.display = `none`;
                btnnext.style.display = `initial`;
                btnyes.style.display = `none`
                btnno.style.display = `none`;
                usernumberlabel.style.display = `none`;
                mainEl.textContent = `This window will ask you a few questions on what will be included in your password.  Should you want a certain character in it, don't forget to hit the 'Yes' button.  Otherwise, hit 'no'.  However, one of them requires you to have a number of characters.  Please type in the number anywhere form 8 to 128.`;
                console.log(`We are in step 1.`);

                break;
            case 2:
                usernumberlabel.style.display = `initial`;
                submitInput.style.display = `initial`;
                btnyes.style.display = `none`;
                btnno.style.display = `none`;
                mainEl.textContent = `How long is this password?  Remember:  It has to be anywhere from 8 to 128.`;
                console.log(`We are in step 2.`)
                break;
            case 3:
                submitInput.style.display = `none`;
                btnyes.style.display = `initial`;
                btnno.style.display = `initial`;
                usernumberlabel.style.display = `none`;
                mainEl.textContent = `Will this sequence have a lowercase?`;
                console.log(`We are in step 3.`)
                break;
            case 4:
                mainEl.textContent = `Will this password have an upper case?`;
                break;
            case 5:
                mainEl.textContent = `Will this password have a numeric character?`;
                break;
            case 6:
                mainEl.textContent = `Will this password have special characters such as ? ! / #?`;
                break;
            case 7:
                mainEl.textContent = `We have the following:  Generate this password?
                If you click no, we'll go back to the input step.`;
                console.log(`wordsentence is now in : ` + wordsentence);
                break;
            }
        }, 100
    );

}

function PasswordGen()
{
    while (i < numberofstrings)
    {
        console.log(`Final PASSWORD`);
        passwordgenerator = Math.floor(Math.random()* wordsselected.length);
        console.log(`Passwordgenerator: ` + passwordgenerator);
        finalpasswordgenerator += wordsselected[passwordgenerator];
        i++;
        console.log(`Password: ` + finalpasswordgenerator);
    }
  finalpasswordoutcome.textContent = finalpasswordgenerator;
}