// Handle form submission and redirect on successful login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can add more advanced validation if needed)
    if (username === " "|| password === " ") {
        document.getElementById('error-message').innerText = "Please enter both username and password.";
    } else {
        // Redirect to the cat images page upon successful login
        window.location.href = "cat.html";
    }
});


const playMusicBtn = document.getElementById("playMusicBtn");
const audio = document.getElementById("backgroundMusic");
playMusicBtn.addEventListener("click", function(){
    audio.play();
    audio.volume = 0.5;  // Set volume to 50% when the page loads

});