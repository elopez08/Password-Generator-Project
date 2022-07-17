## Disclaimer

Before you read this, I wanted to clarify that there are two ReadMe's.  The one with the "OldFile" on it is what was before making all the changes that was needed on the code.  It'll be kept for a recording on what I've done in class.  This one is the official ReadMe AFTER the changes have been made, so just in case anyone is wondering why there are two.

# 

Okay.  This is going to take a really long time to explain, but hopefully by the end of this, someone reads this and is able to undrestand what's going on.


Let's start with the simple function as to operate the button so that there's a popup:

    <button id="myBtn">Open Modal</button>

This is the first thing we see with the words "Open Modal" as its button.  Notice that there's a "myBtn" on it.  We will then call this code on our JS.  This is what it is doing:

    var btn = document.getElementById("myBtn");

We're declaring a value of var "btn" to retrieve whatever the Element ID is for "myBtn".  Therefore, it established this as a link from the HTML to this JS code.  

Next on the "btn", we have this:

    btn.onclick = function() {
    modal.style.display = "block";
    wordsentence++;
    }

What this is doing is that when the button "Open Modal" from the HTML is clicked, the modal will then have a style of "block".  What is "modal", though?  Here, we have to describe yet another function.  Here's what "modal" is FROM THE JAVASCRIPT:

    var modal = document.getElementById("myModal");

So, now that we have this, we need to find where this will affect it.  We noticed that there's an ElementById by the name of "myModa".  We need to go back to the HTML to see where exactly is it being linked.  This is FROM THE HTML:

    <div id="myModal" class="modal">

So, this is a div function which has the id.  Yet, however, there's another funciton being called as a chain link.  This time, we have the class to be as "modal".  With this, this time, we need to go to the CSS file.  Here's what this says IN THE CSS FILE:

    .modal, .modal-two {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

Ignore the modal-two for now since this was a test (doesn't affect the entire code).  Watch carefully:  In short, this is saying to have a window size that is fixed on whatever the contents is inside thanks to the width and height being 100%.  We have an overflow function in case it needs to be scrolled.  Not only that, but we also have a background-color being black.  In addition to this, the opacity of this said color is at 40%.  So in other words, it did the following:

    1. It made the window size to be the function
    2. With a fixed window border, we have a black background that is set to be 40% to give the illusion that whatever it is at the back isn't functioning.

GETTING BACK TO THE JAVASCRIPT (might need to change this):
We have one more thing:  wordsentence++.  I'm using wordsentence to be the states for the function.  Since it starts out at 0, that means it'll start out at that step initially when the JS is called.

There's more I wanted to point out before we move on.  Two more functions are here:

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

The first is whenever "span" is clicked, the "modal" (or as we defined: the window) will disappear.  However, what exactly is "span"?
We defined this at the top:

    var span = document.getElementsByClassName("close")[0];

Now the question is what exactly is "close"?  For this, we go back to the HTML.  This is "close":

    <span class="close">&times;</span>

Just like before, this is a "div" function.  The &times; basically is just a close symbol.  What.. exactly is this?  We know it is class, so now we can determine that it's in the .CSS sheet.  It is this:

    .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

The first identifies what it looks like and the size as well as the boldness of the font.

The second is what happens if you were to use the pointer and hover over X, thus explains how it changed the color state of the letter.

But... where exactly is this?  It is found in the window, but how?  Well, REMEMBER:  It is INSIDE the "div" function of "myModal" that has a class of "modal", AKA, the window itself!  With this knowledge, we can then conclude that this "X" is inside the window, but how did it even get to the top right?  Well, specifically, we have yet another "div" inside the parent "div = myModal".  It is this:

    <div class="modal-content">

Now the question is what is this?  This "div" has a class of "modal-content".  Assuming that this is found in the CSS, we then go back there once more:

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
    }

So now, in short, this "div" (modal-content), which by the way is the child of the "div" "myModal", has the following inside:

    1. p with an id = "main"
    2. button, with an id = "myBtnback"
    3. button, with an id = "myBtnnext"
    4. 2 breaks
    5. label, with a for function of "usernumber"
    6. another p, but this time it has an id = "userinput"
    7. input with the type being "text", an id as "usernumber", and a name referring to as "usernumber"
    8. button, with an id = "btuninputyes"
    9. button, with an id = "btninputno"

That's a lot of inputs.  But to explain this a bit more, ALL OF THIS will not be visible at first.  This will all be invisible.  How and why?  Let's take a look at the parent:

    <div id="myModal" class="modal">

Now, we know that we have a class, so let's take a look at that.  Sure enough, this is what's in it:

.modal, .modal-two {
    display: none; /* Hidden by default */ <--IMPOTANT!!!!!!!
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

Initially, we set this "modal" to be invisible.  So when we load the page, all we see is this:

(show the picture of this function)

With this, we are declaring that we don't have anything in it.  When we finally declare this to open, then it'll apply all of these properties with it, making a popup window.

How did it turn visible?  This is what we did:

    btn.onclick = function() {
    modal.style.display = "block";
    wordsentence++;
    }

Remember that "btn" is linked to :

    var btn = document.getElementById("myBtn");

Remember also that "myBtn" is ALSO linked.  It is linked to:

    <button id="myBtn">Open Modal</button>

This button is found BEFORE the div "myModal" is called, therefore, making this button visible.  When that button is cliked, a chain link happens.  Clicking it will cause the JS to trigger, because we have the btn.onclick function going on.  And we know this is possible because declared that the btn links with the button ID that has "myBtn" in it.


Now, this is all JUST to get the window to pop out.  That's all that button did.  So now, we move to the next step:  How do we get all the questions in one place and applying it for the function?  The answer lies on the next series of steps:


myModal

So now that we know what the myModal looks like, what exactly happens?  Let's take this one step at a time.  Here's what happens after the button is clicked:

(show the image)

So now we need to take this one step at a time.  Let's bring back the list once more to show what happened:

The parent, "myModal", has a child that is defined to be as "modal-content".  We've listed on what it contains, so let's start with the list that it has (or, it should have):

    1. p with an id = "main"
    2. button, with an id = "myBtnback"
    3. button, with an id = "myBtnnext"
    4. 2 breaks
    5. label, with a for function of "usernumber"
    6. another p, but this time it has an id = "userinput"
    7. input with the type being "text", an id as "usernumber", and a name referring to as "usernumber"
    8. button, with an id = "btuninputyes"
    9. button, with an id = "btninputno"

Let's start with p.  This is the function:

    <p id="main"></p>

Now we have a declaration:  id = "main".  So now we go back to the JS once more.  This is what we find:

    var mainEl = document.getElementById('main'); //Remember this is locking on the main in the 'p' on the HTML

So now we know that there's a "mainEl" as a var function that is locking on the ID of that said "main".  We now need to know what's going on with this.  Here's what happens next:

    mainEl.textContent = "This window will ask you a few questions on what will be included in your password.  Should you want a certain character in it, don't forget to hit the 'Yes' button.  Otherwise, hit 'no'.  However, one of them requires you to have a number of characters.  Please type in the number anywhere form 8 to 128.";

So... we jumped a bit on this.  What exactly happened?  We need to take one more step back.  Where is this located?  It is in this function:

    function displayMessage() {

Okay that explains the position, but how did it trigger initially?  It is this:

    displayMessage();

By declaring this, we force the JS to function at "displayMessage();".  We then go back to the source that has that script, which happens to be the function: "    function displayMessage() {"

You see, what happens is that JS triggers once (setting up any values that is being declared).  When an event happens, it triggers once more.  This time, ONLY reading and applying on all functions.  In this case, when the button was clicked, it triggered "displayMessage()", which in turn, this points to the "function displayMessage()".  So now that we know how it triggered, we can finally proceed.  There's still more to cover.

Before we get back to that, I want to point out all the ones we did before we get to that.  So, after function is triggered, this is what happens:

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

In case the wordsentence isn't define, we need to clear.  If it reaches 0, then we close the "modal".  If it reaches 1, then we proceed with the message "mainEl.textContent".
Now we need to explain what "wordsetence" is.  If we go back to the top once more, this is what I defined it:

    var wordsentence = 0;

This declaration happened at the top.  But wait:  If it's 0, how did it not just close?  Remember btn click? That is doing this:

    btn.onclick = function() {
    modal.style.display = "block";
    wordsentence++;
    }

When the btn is clicked, we added the wordsentence by "1", therefore, the first two statements are false and we go to the next step, which is defining "p".  And that's why "p" has that long sentence.

Now that all of that was explained, the others ones are rather simple.  

    2. button, with an id = "myBtnback"
    3. button, with an id = "myBtnnext"

To save a long story short, these two buttons are originally visible, therefore, we see it on screen.

    5. label, with a for function of "usernumber"
    6. another p, but this time it has an id = "userinput"
    7. input with the type being "text", an id as "usernumber", and a name referring to as "usernumber"

This is my attempt to have the user type in their number.  This IS INVISIBLE first.  Considering that we aren't typing anything on the other states, there's no need for this box to exist outside of that state.

    8. button, with an id = "btuninputyes"
    9. button, with an id = "btninputno"

This, originally, is also invisible.  The only time where this is going to be visible is when the question asks if you want this string or not.  Therefore, it isn't found just yet.

To make another note, ALL OF THE BUTTONS are linked to the functions of the modal.content.  These are found here:

    <button id="myBtnback">Back</button>

    <!-- Have this visible when clicked.  But when it changes to the next window, disappear. -->
    <button id="myBtnnext">Next</button>
    <br>
    <br>

    <!--
    //Make this invisible first.  When the next button is clicked, have this visible
    <button id="myBtnback">Back</button>
    -->

    <!-- Label inserted.  Now to find out how to extract information to css -->
    <label for="usernumber"></label>
    <p id = "userinput"></p>
    <input type="text" id = "usernumber" name="usernumber"><br><br>

    <button id="btninputyes">Yes</button>
    <button id="btninputno">No</button>

It's really easy to see.  For each id that is being defined, that is also linked in the JS, hence, how it is able to function as intended.

We'll get to more to that, but I wanted to focus on the function to see if it can clear a few things up:


function()

Let's get back to when the wordsentence became a 1.  Now we need to find a way to get to the next state.  If we look at the picture once more, we do see something:

There's a NEXT button.  Since it was defined and it is visible, we can take a look at that next.  What is this button?  It's defined here:

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

Let's take this slowly.  That button that has "Next" in it on the image is this structure.  The event is btnnext.onclick.  This means it'll trigger this if the button for next is clicked.  Now that it has been clicked, we then move on to the said function:

Looking at the var "wordsentence", if this is "1", then apply these effects.  Note a few things happen:

    1. "Next" button will disappear from:  btnnext.style.display = "none";
    2. Several buttons are now visible:  The label, btnyes, and btnno:

        usernumberlabel.style.display = "initial";
        btnyes.style.display = "initial";
        btnno.style.display = "initial";

Why did I have the next button disappear?  I wanted to make sure that the input is the defining factor and not the "next" button.  We have the index now.

THIS IS FOR THE DEMO AND IT STILL NEEDS TO BE CHANGED!  VERY VERY IMPORANT!!!!!

Now that we have 3 buttons and a text field, I have it that both "Yes" and "No" works to move onto the next step.  I STILL NEED TO WORK ON A WAY FOR THE INPUT OF THE USER TO BE RECOGNIZED, SO THERE ISN'T A SET FUNCTION FOR THIS YET!

In theory, should the text field work, we then move to the next step once either "Yes" or "No" is clicked.  This is because of these functions:

<!--
btnyes.onclick = function() {
  if(wordsentence<10)
  {
    wordsentence++;
    console.log("The button 'Yes' has been clicked. Current wordsentence (inside the btnnext, which is clicking the button) :" + wordsentence);
  }


}

btnno.onclick = function() {
  if(wordsentence<10)
  {
    wordsentence++;
    console.log("The button 'No' has been clicked. Current wordsentence (inside the btnnext, which is clicking the button) :" + wordsentence);
  }


}

-->

Notice that both "Yes" and "No" function works.  This is how we got the next state.  While this works when asking a question, THIS NEEDS TO CHANGE SO IT CAN ONLY ADVANCE TO THE NEXT STATE WHEN THE TEXT IS INPUTTED AND IT MUST BE A NUMBER!  Still working on that.

Now that we move up from either "Yes" or "No", we are now in "wordsentence = 3".  The next state is should this be a "3", we have the following:


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

Ignore the console.logs since this is mostly for testing on the positions of the functions.  What we're interested is a few things:

(show picture)

There's no text field.  That is because we have the label to be gone at this point.

Next, we have both btnyes and btnno to function.  Both case scenarios will force the next state to happen.  Before that, however, I wanted to make sure one thing was clear:  lowenable.  This is the declaration:

    var lowenable = 0;

We'll get to that in a minute.  I would like to point out "Yes" will cause this state to be "1" while "No" remains it at "0".

The next following steps follow suit.  All of it has the same exact function, for the following:

    var highenable = 0;
    var numenable = 0;
    var specialenable = 0;

If any time "Yes" is hit when the question prompts, then it'll change the state to "1".  This is important in a bit.


When we have the questions answered for the states, we then are in this function:

    else if (wordsentence == 7)
      {
        console.log("This is what we have as a result after putting in on the options: " + result);
        mainEl.textContent = "We have the following:  Generate this password?";
        console.log("We are in step 7.");

Nothing really happens here since both "Yes" and "No" will cause the state to happen.  This is mostly for show.

It's this big code we are going to focus on and the big show on what exactly happened with all these states:


Since there's A LOT to cover and I will get back to this, I want to leave ALL THE COMMENTS ON THIS README TO FOLLOW SLOWLY AGAIN.

This code will show once we reach the next state, execute this function:
else if (wordsentence == 8)

Next, we have this:
       
    result = lowenable+highenable+numenable+specialenable;

What we basically did is set a boundary for the password.  We need to have at least one of these functions to work, so if it detects none, that means that there is no list, therefore, unable to generate a password.  This is accomplished with this:

        if (result == 0)
        {
          mainEl.textContent = "Wait... there's not a single character here!  Try again, but this time, put in something or else it will not work!  Go back!"
          wordsentence=3;
        }

Why the 0's and 1's?  I thought of the OR statement.  See, if at least one of the statements is true, that means the value is true.  For this code to execute, we need to have at least one of these characters to work, thus, I "added" the values of the truth/false statements.  This ensures that at least ONE statement has to be true (any of the characters to be added in the password).  If there's at least ONE SET FAMILY, then we can skip this and go to the next.

Next, we have this function:

        else
        {
          mainEl.textContent = "Generating password...";

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

Now this is a BIT tricky to explain.  I also have console.logs to monitor on this.  Let's go this slowly again.  First, the maintext "mainEl" will say "Generating password" on the form.  Next, we need to see ALL OF THE STATEMENTS to see if any are true.  Should it be true, execute the function inside it.
How this works goes something like this:

We have an initial string as this:

    var wordsselected = "";

This is indicating that there's nothing on this list.  IF whenever the the state is true (such as lowenable ==1 ), we then take this var and then add it by itself with the correspondant string.  I have these identifications:

    var lowercaseletters = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numericchar = '0123456789';
    var specialchar = '~!@#$%^&*()`-_=+[]\{}|';

So, should there be a function being added here, it'll expand the list.  If it's a no, DON'T add it.


Now we need a while loop.  I HAVE THIS SET AT 20 AS DEFAULT BECAUSE I STILL NEED TO WORK ON HOW TO EXTRACT THE INPUT OF THE USER AND PLACE IT HERE.  I REPEAT, WE WILL HAVE ONLY 20 CHARACTERS HERE FOR THE TIME BEING.

With that being said, let's go to the next function:

    while (i < 20)

Knowing there are only 20 characters here, we have a declaration of i to continue as long as it is less than 20.  What is "i", though?  We declaered that on the top, actually:

    Line 45 has this:  var i = 0;

Thus, we start out at the bottom.  Now that we know this, let's execut this code:

    {
        randomnumberpicker = Math.floor(Math.random() * 70);

PAUSE:  Let's expalin this:  
var randomnumberpicker = 0;
The var "randomnumberpicker" is set to be '0'.  That's the initial value.  Next, we have this:

    Math.floor(Math.random() * 70);

This is known as the Random Number Generator.  Math will initiate and it'll randomly generate a number anywhere between 0-69.

Next:

    randompasswordgen = wordsselected[randomnumberpicker];

PAUSE:  Line 47:  var randompasswordgen = "";
This is an EMPTY STRING INITIALLY.  So if and whenever SHOULD A NEW STRING BE FOUND, we add it.  Notice this:

    wordsselected[randomnumberpicker];

randomnumberpicker, again, is a randomly generated number from 0-69.  wordsselected, on the other hand, is the total added string to the function.  So this takes into account of everything that has been added (lower case, upper case, etc.).  With the said position identified from the list, it then randomly picks a "char" from that string.  Once the character is found, it then stores it in the string "randompasswordgen", effectively adding the string.


    passwordaddedlist = passwordgenerator + randompasswordgen; //Password generate = +self +a random character from the list

THIS WILL BE USED ANOTHER TIME.  What this is suppose to do is call upon the function again and load it back to the HTML.  I don't know why, but it does work... once.  Need to look at that.

              //We then make the passwordgenerator equal to the current list that was implemented from th last string
              passwordgenerator = passwordaddedlist;


    i++;

In order to avoid the loop to continue forever, we need to have the i increase by 1, thus this function's existance in the string.

            wordsentence++;

When everything is done, go to the final step by increasing the "wordsentence" one more time
  
    //}, 100);

Slow this function for a hundrenth second to see if everything is working as intended!

The final step is now added:


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


This is saying have the wordsentence go back to state of 0 when we start over.  Make btnnext visible again.  Take away btnyes and btnno.  The console are the status of each of the function.  When this is done, CLOSE the "modal" window.

Finally, execute this last function.  The intention of this is to have it dispaly on the screen!!!

function PasswordGen()
{
  finalpasswordoutcome.textContent = passwordgenerator;
}

This last one is to target back the HTML so that it'll replace the text and generate the password.


There are a lot of things that need to work on, but hopefully by this, I can show that there's at least some function on it.  Now to do more research as this is a REALLY long one to tackle.  Hopefully, I'll be able to do it the next few weeks once I learn more about JS and how to make the functions more effective.