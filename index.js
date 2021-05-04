// Hey everyone!

// Today's exercise: Memory test

// Repo: boolean-uk-js-memory-test

// Description
// Test the user's memory with this simple little game. This will also put your skills up to the test!

// Instructions
// - Show the user 4 random numbers between 1 and 100
// - After 15 seconds, ask them to enter each number in order
// - Let them know how many they got right!

// Challenge 1
// When asking the user for the numbers, add ordinality to each number you ask. i.e.:
// - Enter the 1st number
// - Enter the 2nd number
// Etc...

// Challenge 2
// Turn your whole program into a function that will allow you to change the number of numbers displayed and asked for by just entering the desired number as an argument when calling the function

// For example:

// playMemoryTest(4) should show and ask for 4 numbers

// playMemoryTest(10) should show and ask for 10 numbers

// And so on...

// Enjoy!

function randomNumber (upperMostLimit) {
    return Math.round(Math.random() * upperMostLimit)
  }

alert("Let's play a game 😁")

alert("I will show you 4 numbers")

alert("Try to remember them.")

const number1 = randomNumber(100) 

alert("Here comes the first number")

alert(`${number1}`)

const number2 = randomNumber(100) 

alert("Here comes the second number")

alert(`${number2}`)

const number3 = randomNumber(100) 

alert("Here comes the third number")

alert(`${number3}`)

const number4 = randomNumber(100) 

alert("Here comes the fourth number")

alert(`${number4}`)

let userInputs = null

function userReply () {
    const userReply1 = Number(prompt("What was the first number?"))
    const userReply2 = Number(prompt("What was the second number?"))
    const userReply3 = Number(prompt("What was the third number?"))
    const userReply4 = Number(prompt("What was the fourth number?"))

    return userInputs = {
        userReply1: userReply1,
        userReply2: userReply2,
        userReply3: userReply3,
        userReply4: userReply4,
    }
}

setTimeout(userReply, 15000)

function marking () {
    if (userInputs.userReply1===number1 && userInputs.userReply2===number2 && userInputs.userReply3===number3 && userInputs.userReply4===number4) {
        alert("You scored 4 out of four!!!")
    } else if ((userInputs.userReply1===number1 && userInputs.userReply2===number2 && userInputs.userReply3===number3) || (userInputs.userReply2===number2 && userInputs.userReply3===number3 && userInputs.userReply4===number4) || (userInputs.userReply1===number1 && userInputs.userReply2===number2 && userInputs.userReply4===number4) || (userInputs.userReply1===number1 && userInputs.userReply3===number3 && userInputs.userReply4===number4)) {
        alert("You scored 3 out of four 😁")
    } else if ((userInputs.userReply1===number1 && userInputs.userReply2===number2) || (userInputs.userReply1===number1 && userInputs.userReply3===number3) || (userInputs.userReply1===number1 && userInputs.userReply4===number4) || (userInputs.userReply2===number2 && userInputs.userReply3===number3) || (userInputs.userReply2===number2 && userInputs.userReply4===number4) || (userInputs.userReply3===number3 && userInputs.userReply4===number4)) {
        alert("You scored 2 out of four 😁")
    } else if (userInputs.userReply1===number1 || userInputs.userReply2===number2 || userInputs.userReply3===number3 || userInputs.userReply4===number4) {
        alert("You scored 1 out of four 😁")
    } else {
        alert("You scored zero 😕")
    }
}

setTimeout(marking, 16000)