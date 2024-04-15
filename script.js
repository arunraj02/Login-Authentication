document.addEventListener('DOMContentLoaded', function () {
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');

    // Function to handle sign in
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = signInForm.querySelector('.email').value;
        const password = signInForm.querySelector('.password').value;

        // Retrieve users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the provided credentials match any user
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login successful');
            // Redirect to dashboard or perform other actions
        } else {
            alert('Invalid email or password');
        }
    });

    // Function to handle sign up
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = signUpForm.querySelector('.username').value;
        const email = signUpForm.querySelector('.email').value;
        const password = signUpForm.querySelector('.password').value;

        // Validate email address
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return; // Prevent further execution of sign-up process
        }

        // Validate password complexity
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password should contain at least one uppercase letter, one lowercase letter, one number, and one symbol, and be at least 8 characters long.');
            return; // Prevent further execution of sign-up process
        }

        // Retrieve users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username already exists
        const existingUser = users.find(user => user.username === username);

        if (existingUser) {
            alert('Username already exists. Please choose a different username.');
        } else {
            // Check if the email already exists
            const existingEmail = users.find(user => user.email === email);

            if (existingEmail) {
                alert('User with this email already exists. Please use a different email.');
            } else {
                // Add the new user to the array
                users.push({ username, email, password });

                // Store updated user data back to local storage
                localStorage.setItem('users', JSON.stringify(users));

                alert('Sign up successful');
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const loginLink = document.getElementById('login');
    const createLink = document.getElementById('create');

    // Initially show the sign-up form and hide the sign-in form
    signinForm.classList.add('hidden');
    signupForm.classList.remove('hidden');

    // Event listener for the "login" link
    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        signinForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    // Event listener for the "create" link
    createLink.addEventListener('click', function (event) {
        event.preventDefault();
        signinForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });
});