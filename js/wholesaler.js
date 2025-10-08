
document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    const loginBtn = document.querySelector("#login-btn");
    const signupBtn = document.querySelector("#signup-btn");
    const flipToSignup = document.querySelector("#flip-to-signup");
    const flipToLogin = document.querySelector("#flip-to-login");

    flipToSignup.addEventListener("click", (event) => {
        event.preventDefault();
        card.classList.add("flipped");
    });

    flipToLogin.addEventListener("click", (event) => {
        event.preventDefault();
        card.classList.remove("flipped");
    });

    loginBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const loginEmail = document.querySelector("#login-email").value;
        const loginPassword = document.querySelector("#login-password").value;
        
        if (loginEmail.trim() === "" || loginPassword.trim() === "") {
            alert("Please fill in all login fields.");
        } else {
            console.log("Logging in with", loginEmail);
            alert("Login Successful!");
            window.location.href = "Wdash.html"; // ✅ Make sure Wdash.html is correctly named and located
        }
    });

    signupBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const signupEmail = document.querySelector("#signup-email").value;
        const signupPassword = document.querySelector("#signup-password").value;
        const confirmPassword = document.querySelector("#confirm-password").value;
        
        if (signupEmail.trim() === "" || signupPassword.trim() === "" || confirmPassword.trim() === "") {
            alert("Please fill in all signup fields.");
        } else if (signupPassword !== confirmPassword) {
            alert("Passwords do not match.");
        } else {
            console.log("Signing up with", signupEmail);
            alert("Signup Successful! Redirecting to login page.");
            card.classList.remove("flipped");
        }
    });
});
