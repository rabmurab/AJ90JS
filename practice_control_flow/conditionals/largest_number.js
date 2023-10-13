// Largest Number

const num1 = prompt("Provide a number: ");

const num2 = prompt("Provide a second number");

const num3 = prompt("Provide a third number");

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest number`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the largest number`);
} else if (num3 > num1 && num3 > num1)
{
    console.log(`${num2} is the largest number`);
} else {
    console.log("numbers are equal");
}