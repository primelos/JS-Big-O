// You're working on a secret team solving coded transmissions.

// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

// For example:

//   const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

// console.log(message.join(''));
// // Prints: 'steal pound cake'

function reverseWords(message) {
  // console.log('message', message.join(''))
  // Decode the message by reversing the words
  console.log(message);
  reverseCharacters(message, 0, message.length - 1);
  console.log(message);

  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === " ") {
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}

function reverseCharacters(message, leftIndex, rightIndex) {
  while (leftIndex < rightIndex) {
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}
