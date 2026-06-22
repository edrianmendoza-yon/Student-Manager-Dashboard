export class Student {
    constructor(id, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

// Create an array of Student class instances
export let mockStudentDb = [
    new Student(Date.now(), "Lightning", "McQueen", "lightning.mcqueen@example.com"),
    new Student(Date.now() + 1, "Woody", "Pride", "woody.pride@example.com"),
];
console.log(`Initial DB State: ${JSON.stringify(mockStudentDb, null, 2)}`);

// This function simulates the GET request to a backend server.
export let getStudentsAPI = () => {
    return mockStudentDb;
}

// This function simulates the POST request to a backend server.
export let addStudentAPI = (newStudentData) => {
    const uniqueId = Date.now(); // Generates unique number based on current time
    const savedStudent = new Student(
        uniqueId,
        newStudentData.firstName,
        newStudentData.lastName,
        newStudentData.email
    );
    mockStudentDb.push(savedStudent);
    return savedStudent;
}

// addStudentAPI({ firstName: "Light", lastName: "Yagami", email: "light.yagami@example.com" });
// console.log(`Returned Saved Object: ${JSON.stringify(mockStudentDb[2], null, 2)}`);
// console.log(`Updated DB State: ${JSON.stringify(getStudentsAPI(), null, 2)}`);