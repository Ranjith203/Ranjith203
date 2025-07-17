// Check login status and redirect if not logged in
function checkLogin() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    window.location.href = "login.html";
  }
}

// Handle login form
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("errorMsg");

      // Dummy login credentials
      if (username === "Ranjith" && password === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "Galine.html";
      } else {
        errorMsg.textContent = "Invalid username or password";
      }
    });
  }
});
