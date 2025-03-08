// Show/Hide Profile Dropdown
function toggleDropdown() {
    document.querySelector(".profile-menu").classList.toggle("active");
}

// Change Theme
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Logout
function logout() {
    window.location.href = "index.html";
}

// Restrict Future Dates
function setMaxDate() {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("start-date").setAttribute("max", today);
    document.getElementById("end-date").setAttribute("max", today);
}
window.onload = setMaxDate;

// Apply Button Functionality
document.getElementById("apply-btn").addEventListener("click", function() {
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let classType = document.getElementById("class-type").value;

    if (!startDate || !endDate) {
        alert("Please select both start and end dates.");
        return;
    }

    let attendanceHTML = `
        <p><strong>Class Type:</strong> ${classType.charAt(0).toUpperCase() + classType.slice(1)}</p>
        <p><strong>Date Range:</strong> ${startDate} to ${endDate}</p>
        <table>
            <tr><th>Student Name</th><th>Attendance</th></tr>
            <tr><td>John Doe</td><td>Present</td></tr>
            <tr><td>Jane Smith</td><td>Absent</td></tr>
        </table>
    `;

    document.getElementById("attendance-data").innerHTML = attendanceHTML;
});

// Download PDF
document.getElementById("download-btn").addEventListener("click", function() {
    window.print();
});
