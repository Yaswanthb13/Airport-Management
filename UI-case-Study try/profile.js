// profile.js
document.addEventListener("DOMContentLoaded", function() {
    const profileForm = document.getElementById("profileForm");
    const editButton = document.getElementById("editButton");
    const saveButton = document.getElementById("saveButton");

    editButton.addEventListener("click", function() {
        const inputs = profileForm.querySelectorAll("input, textarea");
        inputs.forEach(input => input.removeAttribute("readonly"));

        editButton.style.display = "none";
        saveButton.style.display = "inline-block";
    });

    saveButton.addEventListener("click", function() {
        const inputs = profileForm.querySelectorAll("input, textarea");
        inputs.forEach(input => input.setAttribute("readonly", true));

        saveButton.style.display = "none";
        editButton.style.display = "inline-block";

        alert("Profile details have been updated.");
    });
});

function toggleDropdown() {
    const dropdown = document.getElementById("myTripsDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
};