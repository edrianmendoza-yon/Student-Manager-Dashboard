import { getStudentsAPI, addStudentAPI } from './api.js';

let localStudents = [];

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

const renderTable = (dataArray) => {
    studentTableBody.innerHTML = "";

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
        studentTableBody.innerHTML = "<tr><td colspan='4' style='text-align:center;'>No student records found.</td></tr>";
        return;
    }

    dataArray.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.firstName || ""}</td>
            <td>${student.lastName || ""}</td>
            <td>${student.email || ""}</td>
        `;
        studentTableBody.appendChild(row);
    });
}

studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get values from DOM
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validate all fields are filled
    if (!firstName || !lastName || !email) {
        alert("All input fields must be filled out.");
        return;
    }

    // Create student data object
    const studentData = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    // Pass data to API function
    addStudentAPI(studentData);

    // Refresh table
    renderTable(localStudents);

    // Reset form fields
    studentForm.reset();
});

const initApp = () => {
    localStudents = getStudentsAPI();
    renderTable(localStudents);
};

// Display without populated database
renderTable(localStudents);
// Display the initial populated database
initApp();