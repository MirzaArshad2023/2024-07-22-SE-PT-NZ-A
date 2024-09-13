const student = {
    name: 'Sita',
    age: 28,
    courses: ['HTML', 'CSS', 'JS'],
    occupation: null,
    doHomeWork: function()
        {
            console.log("Doing homework")            
        },
    driversLicense: undefined
    }


let jsonstring = JSON.stringify(student)
    console.log(student)
    console.log(jsonstring)