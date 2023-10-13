// Calculate Average Score

const numberOfCourses = prompt("How many course did you write?: ");

let average = 0

const size = parseInt(numberOfCourses);

for (let i = 0; i < size; i++) {
    let grade = prompt("Grade: ");

    let intGrade = parseInt(grade);

    if (i === 0) {
        average = intGrade;
    } else {
        average = (average + intGrade) / 2;
    }

}

console.log(average);