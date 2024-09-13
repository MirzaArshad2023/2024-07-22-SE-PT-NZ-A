let student = {
    firstName: "Will",
    country: "New Zealand",
    batch: "2024"
}

function printStudentName({firstName, ...properties})
{
    console.log("The name of the student is :" + firstName)
    console.log(properties)
}

printStudentName(student)