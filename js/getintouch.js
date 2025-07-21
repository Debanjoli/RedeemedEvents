document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const phoneInput = document.getElementById("contactPhone");
  const messageInput = document.getElementById("contactMessage");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const messageError = document.getElementById("messageError");

  // Function to show error
  function showError(inputElement, errorElement, message) {
    inputElement.classList.add("is-invalid");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  // Function to hide error
  function hideError(inputElement, errorElement) {
    inputElement.classList.remove("is-invalid");
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Basic phone validation regex (digits only, optional + at start)
  const phoneRegex = /^\+?\d+$/;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === "") {
      showError(nameInput, nameError, "Please enter your name.");
      isValid = false;
    } else {
      hideError(nameInput, nameError);
    }

    // Validate Email
    if (emailInput.value.trim() === "") {
      showError(emailInput, emailError, "Email is required.");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, emailError, "Please enter a valid email address.");
      isValid = false;
    } else {
      hideError(emailInput, emailError);
    }

    // Validate Phone
    if (phoneInput.value.trim() === "") {
      showError(phoneInput, phoneError, "Phone number is required.");
      isValid = false;
    } else if (!phoneRegex.test(phoneInput.value.trim())) {
      showError(
        phoneInput,
        phoneError,
        "Please enter a valid phone number (digits only)."
      );
      isValid = false;
    } else {
      hideError(phoneInput, phoneError);
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
      showError(messageInput, messageError, "Please enter your message.");
      isValid = false;
    } else {
      hideError(messageInput, messageError);
    }

    if (isValid) {
      // If all fields are valid, you can proceed with form submission (e.g., via AJAX)
      alert("Form submitted successfully!");
      contactForm.reset(); // Clear the form
      // In a real application, you would send data to a server here
    }
  });

  // Optional: Real-time validation on input change/blur
  nameInput.addEventListener("input", () => hideError(nameInput, nameError));
  emailInput.addEventListener("input", () => hideError(emailInput, emailError));
  phoneInput.addEventListener("input", () => hideError(phoneInput, phoneError));
  messageInput.addEventListener("input", () =>
    hideError(messageInput, messageError)
  );
});
