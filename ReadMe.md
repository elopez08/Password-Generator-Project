## Disclaimer

Before you read this, I wanted to clarify that there are two ReadMe's.  The one with the "OldFile" on it is what was before making all the changes that was needed on the code.  It'll be kept for a recording on what I've done in class.  This one is the official ReadMe AFTER the changes have been made, so just in case anyone is wondering why there are two.  With that disclaimer out of the way, let's begin!


Random Password Generator
=========================

By Edgardo Lopez
-------------------------


## Table of Contents
==============================

*  [The Purpose](#the-purpose)
*  [Installation](#installation)
*  [Usage](#usage)
*  [The Process](#the-process)
        (a)    IDs that are being defined
        (b.)    CSS in accordanace to Modal
        c.  HTML format is structured correctly for the Modal
        d.  JS functioning correctly when the buttons are clicked
        e.  Setting a timer/steps for the questions
        f.  Ensuring data is being extracted when called
*  [What Was Done Differently](#differently)
*  [Contributing](#contributing)
*  [Project Status](#project-status)
*  [Disclaimer](#disclaimer)
==============================

##  [The Purpose](#the-purpose)

To generate a randomize password using characters on a string that is a length between 8 and 128.

##  [Installation](#installation)

Head on over to the GitHub:

When you have a folder location, issue the command:  

```bash
git clone {link of the project}
```
Remember to use a program such as Powershell and have a program like Visual Studio Code to be able to open and edit the project.

##  [Usage](#usage)
In order to use the program, first, open up the main.html file that's located in the folder.  Right click, and then open up to your default browser (I'll be using Chrome for this example).  Once that's done, click on the "Generate Password" button and answers the questions prompt on the pop up.  Once that's done, you'll be given a password generated depending on the output you have defined when answering the length of the password and it'll generate the characters according to your desired specifications (such as lower case value, upper case value, etc.).

##  [The Process](#the-process)

As explained in the Disclaimer, this is a remake of the ReadMeOldFile.  Most of the information process that you'll see in this section is mostly done on what I did when changing the code.  For a brief skim on what was the process, read on the ReadMeOldFile.  In case that this is the only ReadMe that's being read, a few obstacles that needed to be tackled in order to make sure this is working:

    1.  IDs that are being defined
    2.  CSS in accordance to the Modal
    3.  HTML format is structured correctly for the Modal
    4.  JS functioning correctly when the buttons are clicked
    5.  Setting a timer/steps for the questions
    6.  Ensuring data is being extracted when called

Let's tackle each of them.

#   IDs that are being defined

Going by 1, this is all from what happened in the .HTML.  We were given a structure on how the code is going to look like, so we used that as a base.  However, there's one thing that needed to be added:  A Modal that displays the questions/answers on what we need to do for each of the steps.  Thus, we needed to make one more feature, which is defined as "myModal".  

#   CSS in accordance to the Modal

On the 2nd step, the imporant step to take is how the program is going to read it as a CSS.  This ensures a few important features.  In the .css, there's a function for ".modal" which is going to be used on the code.  With the properties being defined there, it ensures that there's a window popup that'll ask a few questions.  Something to note is that with each function, there needs to be a way to manipulate to give the illusion of something.  What I mean by this is that with the function, we can make the window pop out, but it'll overlay the page.  A new sets of properties was added in it as well:

    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

This will make the entire screen with an opacity of black, but not the window.  With this, we created an illusion where the window is popped out.  The idea behind it is so that the eyes are focused on the window itself and not the entire page.  In other words, while we are generating the password, it's making sure that particular window is standing out.


#   HTML format is structured correctly for the Modal

Step 3 is more on identifying the IDs for the Modal.  When the "id"s are being defined, that will give an identity for the JS.  We needed to make sure that it is followed.  In addition to this, we needed to make sure that the position is correct, or at the very least, looks neatly as possible, when the window pops out.  This is what the "myModal" looks like in the HTML:

    <div id="myModal" class="modal">

        <div class="modal-content">

            <span class="close">&times;</span>
    <!-- 
        
        Have this message change.  We're going to need the following:
        1. Clicking on generate password prompts to a series of questions to make a password.
        2. Length of the password between 8 and 128
        3. Have lowercase(?)
        4. Have uppercse(?)
        5. Have numberic(?)
        6. Have special characters(?)
        7. MUST have at least one in it once validated (ex:  If you said yes to a number, password MUST have a number)
        8. Generates a password from the matching criteria
        9. Displayed as an alert or written on page
    
    -->
            <p id="main"></p>

            <button id="myBtnback">Back</button>

            <button id="myBtnnext">Next</button>

            <label for="usernumber"></label>
            <p id = "userinput"></p>
            <input type="text" id = "usernumber" name="usernumber" placeholder = "Enter your number"><br><br>

            <button id="submitnumber">Submit</button>
            <button id="btninputyes">Yes</button>
            <button id="btninputno">No</button>

        </div>  

    </div>

Why are all the buttons and texts being defined?  When the code is called, this will be put in the myModal, so it'll structure the position of it.  What I did before all of this is make a dummy "modal" and see how it looked like below the code.  Once the window is set in place, I took out anything unnecessary and then have it "hidden".  It'll be defined in the JavaScript.  For now, picture that window with all the buttons, but it's "invisible".

#   JS functioning correctly when the buttons are clicked

Step 4 now takes us to the gears of the project:  The functions.  One of the things I wanted to restructure was defining all the buttons and texts with the IDs first BEFORE anything else.  You'll see the "getElementById", for example, in the beginning giving each of the IDs and identity for the JS.  There are a few more things being added to the JS, which is why that is then put as the second structure such as "wordsentence".  This is important, but this will be defined in the JS.  Once that's done, I gave three overall identities:  btn when clicked, function of the questionsPassword(), and PasswordGen().  Where are the other buttons?  It is located inside the questionsPassword().  These buttons will serve purpose in the timer, but the btn that is being defined outside of it is the only one that's working outside of the timer, thus, why I structured it that way.


#   Setting a timer/steps for the questions

Step 5 is another big one.  One of the things that was added that wasn't COMPLETELY necessary was the timer.  I wanted to add that for future development, but I wanted to make sure that this is working first.  Thus, we have this:      var msgInterval = setInterval(function () {
What this does is that once the function is called (from the btn's trigger), it'll start a timer.  I have it set to 100 ms, so for each passing time, it'll go on the loop over and over again until something changes.  This is where the "wordsetence" finally comes into play.  As long as it is higher than 0 and less than 10, then it'll go on a constant loop.  If it doesn't know the number or if it reaches 0, then one of the if statements is triggered:

        if (wordsentence == undefined || wordsentence == 0) {
            clearInterval(msgInterval);
        }

With this, it'll cause the timer to halt and thus ending the program.

#   Ensuring data is being extracted when called

Step 6 is just as important.  There are two datas that is being extracted that will be used as sources:  One which the user types in the number and one when the password is being generated.  For the user, that's on step 2.  This is the screenshot:

{use the screenshot for the 2nd step}

To go into deeper detail on this, I have this code as well:

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

The submit button would be the trigger, however, the usernumberlabel, AKA, the user's input, will be the thing that either prevents the next step or proceeds it.  If it's any letter, character, numbers that is less than 8, or higher than 128, you will get the first statement saying to try again in the console.log.  However, if the number IS between 8-128, then you can go to the next step.

Finally, we have the password itself.  Notice this part here:

    var lowercaseletters = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numericchar = '0123456789';
    var specialchar = '~!@#$%^&*()`-_=+[]\{}|';

I'm using a declared strings for the characters.  With this in mind, we have one more obstacle:  How does it know to use these?  This is where the next difference is from before:  The cases.  On the "btnyes", this is what triggers it:

        btnyes.onclick = function() {
            switch (wordsentence) {
                ...
                case 3:
                    console.log(`Step 3 and the btn was pressed!
                    We're going to add the lower case statement with the list!`);
                    wordsselected += lowercaseletters;
                    break;

Let's use the first one we see:  Case 3.  When the button "yes" is clicked, you then have a function being triggered.  "wordsselected" is my base for the array, which is what was defined earlier.  This is the definition:

var wordsselected = ``;

This is an empty array.  Whenever you click "yes" on its respected cases, you take that string, add itself, and also the corresponding string.  In this case, we have an empty string adding with the "lowercaseletters", which was defined as:  

    var lowercaseletters = 'abcdefghijklmnopqrstuvwxyz';

We need this so that it'll randomly generate the password.

##  [What Was Done Differently](#what-was-done-differently-1)

I've changed the " " to `` on the majority of the code.  The reason for that being is because I'll be using the '' and "" symbols and that allows for me to use it.  If I use '', then I can't use strings or statements such as:  can't

One of the things I've noticed on this code that was a major problem was there was a needless amount of "if" and "else" statements in the code.  With this, the code easily went up by +100 lines.  I wanted to reduce this and in order to do that, I needed to find another way.  I've noticed that two of the major functions that are in use are the "yes" button and the "states" themselves.  With these two, they are affected by the question that we're in the code.

The change I made from both of these functions is using "case" statements and it is targetting on the state itself.  I noticed that both the "yes" button and the paragraph correspond with the state that we're in (or in this case, the questions).  With this, I wanted to implement the case statements to both of these.  With the states itself, I wanted to make sure that the buttons and labels display in accordance to the steps.  With this in mind, I decided to scrap a lot of the if and else statements and replaced it with cases.  This gives the same results, but if we look at the previous project, it is now over 200 lines less

In addition to this, we learned something about the private settings.  With this in mind, I don't want the data tampered, so I decided to move the statements that contains the strings such as the lower case values in the questionPassword.  This ensures that function, alone, has the identification and not the entire code as a whole.  This is now private.

Another change I did was making the timer function work better.  Previously, I had the timer run... constantly.  This could lead to overfrying the memory and possibly crashing the system.  With this, I decided to do the following:  As the JS is loaded, nothing is running, but this is being identified:

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

Notice this one here:  questionsPassword(); .  This will cause the timer to set off ONLY when the btn is clicked, AKA, the one that has the "Generate Password".  After this, then the timer barely starts and it runs every 100 ms.  In addition to this, there's this function:

            modal.style.display = `none`;
            //Reset the counter
            wordsentence = 0;

Why is this important?  Two things occur:  One, the "modal", or in this case the popout for the question, closes.  It's the 3rd line dealing with the "wordsetence" that's important, however.  This is because later down the code, we have this:

        if (wordsentence == undefined || wordsentence == 0) {
            clearInterval(msgInterval);
        }

If the wordsetence isn't defined, or if it is at step 0, that means it'll trigger "clearInterval(msgInterval).  This means taht the timer just stops and we're back to step 0.  This halts the loop from occuring over and over again needlessly, so it'll save the data.

The next thing I wanted to point out is how the function knows the password that's being generated.  In order to ensure that I see it properly, I have another function made, which is "PasswordGen()".  With this, we can see how it is being made.  This ONLY triggers on case 7, where we reached the final question.  With this, it calls that function and then it'll calculate.  Once that's done, it'll then store that in the string of "finalpasswordgenerator", which is the ID for the box.  This onnly happens while "i" is less than the numberofstrings, or how big the number was declared from the user.  Once that's done, then it goes to the next step, which will close the window.  The program is still running, so one more "clearInterval(msgInterval)" is declared to assure that the program halts itself.  Thus, we made our Random Password Generator that not only works, but also lowered the amount of lines that was needed!

#   [Contributing](#contributing)

With the changes I did, there aren't any bug encounters (at least not from what I've seen).  Any new encounters with the bug is encouraged to be contacted at edgardoca2007@hotmail.com.  As one of the people I've worked with as a tester:  Intentionally break it somehow.  If a bug is encountered, feel free to contact and share the information!


#   [Project Status](#project-status)

This is an ongoing project that will be redefined for a must cleaner coding if it is complicated.
Changes made from last time:  July 14, 2022 by Edgardo Lopez

#   [Disclaimer](#disclaimer)
