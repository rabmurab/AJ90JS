// Grade Calculator

const grades = prompt("What's your score?:");

if (grades > 100) {
    console.log("Enter a number between 0 - 100");
} else if (grades >= 70) {
    console.log("Grade: A");
} else if (grades >= 60) {
    console.log("Grade: B");
} else if (grades >= 50) {
    console.log("Grade: C");
} else if (grades >= 45) {
    console.log("Grade: D");
} else if (grades >= 40) {
    console.log("Grade: E");
} else {
    console.log("Grade: F");
}