// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("registrationForm");
  const errorMessageDiv = document.getElementById("error-message");
  

  // Handle form submission
  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      // Clear previous error messages
      errorMessageDiv.innerHTML = "";

      let hasError = false;

      // Validate First Name
      const firstName = document.getElementById("firstName").value.trim();
      if (firstName === "") {
          errorMessageDiv.innerHTML += "<p>First Name is required.</p>";
          hasError = true;
      }

      // Validate Last Name
      const lastName = document.getElementById("lastName").value.trim();
      if (lastName === "") {
          errorMessageDiv.innerHTML += "<p>Last Name is required.</p>";
          hasError = true;
      }

      // Validate Date of Birth
      const dob = document.getElementById("dob").value;
      const dobDate = new Date(dob);
      const minDate = new Date("1924-01-01");
      if (dobDate <= minDate) {
          errorMessageDiv.innerHTML += "<p>Choose a date greater than 1/1/1924.</p>";
          hasError = true;
      }

      // Validate Email
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
          errorMessageDiv.innerHTML += "<p>Enter a valid mail id.</p>";
          hasError = true;
      }

      // Validate Address
      const address = document.getElementById("address").value.trim();
      if (address === "") {
          errorMessageDiv.innerHTML += "<p>Address is required.</p>";
          hasError = true;
      }

      // Validate Contact Number
      const contactNumber = document.getElementById("contactNumber").value.trim();
      if (contactNumber.length !== 10 || isNaN(contactNumber)) {
          errorMessageDiv.innerHTML += "<p>Enter a valid contact number (10 digits only).</p>";
          hasError = true;
      }

      // If there are no errors, show the acknowledgment
      if (!hasError) {
          const passengerId = Math.floor(Math.random() * 100000) + 1;
          const password = firstName.slice(0, 4) + "@123";

          alert(`Passenger Registration is successful.\nPassenger ID: ${passengerId}\nPassword: ${password}`);
      }
  });

// Handle Reset Button
form.addEventListener("reset", function(event) {
    event.preventDefault(); // Prevent default reset action

    const confirmation = confirm("Is it Okay to reset the fields?");
    if (confirmation) {
        location.reload(); // Reset all form fields
        errorMessageDiv.innerHTML = ""; // Clear any error messages
    }
});
});

