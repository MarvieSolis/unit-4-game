# unit-4-game

## The Function of This Program
"Unit-4-game" or "Infinity Stone Collector" is a click based game where the user must match the random number given by clicking on 6 random valued infinity stones. The concept is similar to the card game Blackjack. The values of each stone and the ranom number reset every time the user either correctly obtains a matching value or if the user goes over the random value. Depending on whether the user wins or loses, the messages "You are a god amongst us all." or "You are not worthy..." will be alerted by the page respectively.

The script file mainly consists of **jQuery on click** functions that point to different elements of the page, mainly the six infinity stone images. Those images had to be changed to **input** elements since I could not get the images to work on click as **img** elements. When the page is loaded, the random number and the six infinity stone's values are generated using the **math random** function. For every "on click" function, the page adds the value to a total score variable and checks whether the user has matched or went over the random number using an **If statement**.

As for the CSS and HTML, **bootstrap** as used to create the layout. Each section of the page was its own **div**. An audio file with the Avengers theme was added, however I could not get it to autoplay upon the page loading initially. The textx of the random number and the total score are targeted and changed on the fly by jQuery on click commands.



## The Usefulness
Using this website and analyzing this code can help give an understanding on how to use jQuery to perform dynamic websites and various functions. Functions utilizing the **$** selector enable the user to target specific page elements and either perform specific functions, change attributes, styling, and more.


## Getting started
People can learn more about using jQuery by looking through websites such as [jQuery.com](https://www.jquery.com/) or [w3schools](https://www.w3schools.com/jquery/default.asp).