document.addEventListener('DOMContentLoaded', function () {
    const profileButton = document.getElementById('profile-button');
    const loginForm = document.getElementById('login-form');

    // Toggle login form visibility on button click
    profileButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click from propagating to document
        loginForm.classList.toggle('hidden');
    });

    // Hide login form when clicking outside
    document.addEventListener('click', function (event) {
        if (!loginForm.contains(event.target) && !profileButton.contains(event.target)) {
            loginForm.classList.add('hidden');
        }
    });
});


// Get the button and the club section
const clubButton = document.getElementById('club-button');
const clubSection = document.getElementById('club');

// Add event listener for button click
clubButton.addEventListener('click', function() {
  // Scroll down to the club section
  clubSection.scrollIntoView({ behavior: 'smooth' });
});

