let totalCGPA = 0;
let totalCredits = 0;

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });

    document.getElementById(sectionId).style.display = 'block'; // Show selected section
}

function calculateMarksRequired() {
    const T1 = parseInt(document.getElementById('T1').value);
    const T2 = parseInt(document.getElementById('T2').value);
    const totalInternal = T1 + T2;
    let resultText = `Internal Marks: ${totalInternal}. `;

    if (totalInternal >= 20) {
        resultText += "Minimum marks required for ESE: 20.";
    } else {
        const requiredMarks = 40 - totalInternal;
        resultText += `Minimum marks required for ESE: ${requiredMarks}.`;
    }

    document.getElementById('marksRequiredResult').innerText = resultText;
}

function checkPassFail() {
    const T1 = parseInt(document.getElementById('T1Pass').value);
    const T2 = parseInt(document.getElementById('T2Pass').value);
    const ese = parseInt(document.getElementById('ESE').value);
    const totalMarks = T1 + T2 + ese;
    let resultText = `Total Marks: ${totalMarks}. `;

    if (totalMarks >= 40 && ese >= 20) {
        resultText += "You are pass, congrats!";
    } else {
        resultText += "You are fail, try your best next time!";
    }

    document.getElementById('passFailResult').innerText = resultText;
}

function calculateCGPA() {
    const gpa = parseFloat(document.getElementById('grade').value);
    const credit = parseFloat(document.getElementById('credit').value);

    if (gpa > 0 && credit > 0) {
        totalCGPA += gpa * credit;
        totalCredits += credit;
        document.getElementById('cgpaResult').innerText = `Added GPA: ${gpa}, Credit Hours: ${credit}.`;
    } else {
        alert("Please enter valid GPA and Credit Hours.");
    }
}

function finalCGPA() {
    if (totalCredits > 0) {
        const finalCGPA = totalCGPA / totalCredits;
        document.getElementById('cgpaResult').innerText = `Your Final CGPA is: ${finalCGPA.toFixed(2)}`;
    } else {
        alert("No credits entered. CGPA cannot be calculated.");
    }
}
