#! usr/bin/env node
import inquirer from "inquirer";
let markSheet = await inquirer.prompt([
    {
        message: "Student Name", type: "string", name: "name"
    },
    {
        message: "Student Roll number", type: "number", name: "rollNumber"
    },
    { message: "Enter marks of English out of /100", type: "number", name: "english" },
    { message: "Enter marks of Maths out of /100", type: "number", name: "maths" },
    { message: "Enter marks of Physics out of /100", type: "number", name: "physics" },
    { message: "Enter marks of Chemistry out of /100", type: "number", name: "chemistry" },
    { message: "Enter marks of Urdu out of /100", type: "number", name: "urdu" },
]);
let totalMarks = (markSheet.english + markSheet.maths + markSheet.physics
    + markSheet.chemistry + markSheet.urdu);
let percentage = (totalMarks * 100 / 500);
console.log(`Student Name   ${markSheet.name}   Roll No.  ${markSheet.rollNumber}`);
console.log(`Subject English   ${markSheet.english}   Subject Maths       ${markSheet.maths}`);
console.log(`Subject Physics   ${markSheet.physics}   Subject Chemistry   ${markSheet.chemistry}`);
console.log(`Subject Urdu      ${markSheet.urdu}`);
console.log(`Total Marks out of /500     ${totalMarks}     Percentage     ${percentage}`);
if (percentage >= 80 && percentage <= 89.99) {
    console.log("Grade    A+");
}
else if (percentage >= 70 && percentage <= 79.99) {
    console.log("Grade A");
}
else if (percentage >= 60 && percentage <= 69.99) {
    console.log("Grade B");
}
else if (percentage >= 50 && percentage <= 59.99) {
    console.log("Grade C");
}
else if (percentage >= 40 && percentage <= 49.99) {
    console.log("Grade D");
}
else {
    console.log("fail");
}
