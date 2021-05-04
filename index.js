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

const gameLength = prompt("How many numbers do you think you can remember over 15 seconds?")
  
alert(`Okay then ${gameLength} numbers it is 💪`)

const correctNumbersArray = []

for (let i = 0; i < gameLength; i++) {
  correctNumbersArray.push(usersNumber = randomNumber(100))
  alert(`Here comes number ${i + 1}`)
  alert(`${usersNumber}`)
}

const userGuessArray = []

function userReply () {
  for (let i = 0; i < gameLength; i++) {
    userGuessArray.push(usersNumber = Number(prompt(`What was number ${i + 1}`)))
  }

  let totalMatches = 0

  for (let i = 0; i < gameLength; i++) {
    if (correctNumbersArray[i] === userGuessArray[i]) {
      totalMatches++
    }
  }

  alert(`You managed to match ${totalMatches} numbers.  Good Job 👍`)
}

setTimeout(userReply, 15000)

