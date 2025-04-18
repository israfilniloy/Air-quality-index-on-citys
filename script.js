document.addEventListener("DOMContentLoaded", function () {
   const form = document.querySelector("form");
   const messageDiv = document.getElementById("message");

   form.addEventListener("submit", function (e) {
       e.preventDefault(); // Prevent default form submit

       // Clear previous message
       messageDiv.textContent = "";

       // Get values
       const name = document.getElementById("name").value.trim();
       const email = document.getElementById("email").value.trim();
       const username = document.getElementById("username").value.trim();
       const password = document.getElementById("password").value;
       const confirmPassword = document.getElementById("confirmpassword").value;
       const gender = form.querySelector('input[name="gender"]:checked');
       const day = form.querySelector('input[name="day"]').value.trim();
       const month = form.querySelector('input[name="month"]').value.trim();
       const year = form.querySelector('input[name="year"]').value.trim();

       // Validation
       if (!name || !email || !username || !password || !confirmPassword) {
           messageDiv.textContent = "Please fill out all required fields.";
           messageDiv.style.color = "red";
           return;
       }

       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailPattern.test(email)) {
           messageDiv.textContent = "Invalid email format.";
           messageDiv.style.color = "red";
           return;
       }

       if (password !== confirmPassword) {
           messageDiv.textContent = "Passwords do not match.";
           messageDiv.style.color = "red";
           return;
       }

       if (!gender) {
           messageDiv.textContent = "Please select a gender.";
           messageDiv.style.color = "red";
           return;
       }

       if (!day || !month || !year ||
           isNaN(day) || isNaN(month) || isNaN(year) ||
           day < 1 || day > 31 ||
           month < 1 || month > 12 ||
           year.length !== 4
       ) {
           messageDiv.textContent = "Please enter a valid date of birth.";
           messageDiv.style.color = "red";
           return;
       }

       // Success
       messageDiv.textContent = "Registration Successful!";
       messageDiv.style.color = "green";
       form.reset();
   });
});
