// Positive or Negative

let userInput;

do {
    userInput = prompt("Enter a number: ");
} while (isNaN(userInput) || userInput.trim() === "");

if (userInput > 0) {
    console.log("The number is positive.");
} else if (userInput < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
