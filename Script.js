function signup() {
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  if (email === "" || password === "") {
    document.getElementById("message").innerText = "All fields are required!";
    document.getElementById("message").style.color = "red";
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  document.getElementById("message").innerText = "Signup successful!";
  document.getElementById("message").style.color = "green";
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let storedEmail = localStorage.getItem("userEmail");
  let storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    document.getElementById("message").innerText = "Login successful!";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").innerText = "Invalid credentials!";
    document.getElementById("message").style.color = "red";
  }
}
