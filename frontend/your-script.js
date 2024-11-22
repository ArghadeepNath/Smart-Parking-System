
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdown = document.querySelector('.hamburger-dropdown');

    hamburger.addEventListener('click', function () {
        dropdown.classList.toggle('show');
    });

    window.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.navlink ul li a');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if(this.getAttribute('href') === '#') {
                e.preventDefault();
            }

            localStorage.setItem('SignInUpPagelastClickedLinkId', this.id);
            localStorage.setItem('SignInUpPagelastClickedLinkHref', this.getAttribute('href'));
            localStorage.setItem('SignInUpPagelastClickedLinkText', this.innerText);

        });
    });
});

var SignInUpPagelastClickedLinkId = localStorage.getItem('SignInUpPagelastClickedLinkId');
var SignInUpPagelastClickedLinkHref = localStorage.getItem('SignInUpPagelastClickedLinkHref');
var SignInUpPagelastClickedLinkText = localStorage.getItem('SignInUpPagelastClickedLinkText');

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.hamburger-dropdown li a:not(.social-icons > a)');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if(this.getAttribute('href') === '#') {
                e.preventDefault();
            }

            localStorage.setItem('SignInUpPagelastClickedLinkId', this.id);
            localStorage.setItem('SignInUpPagelastClickedLinkHref', this.getAttribute('href'));
            localStorage.setItem('SignInUpPagelastClickedLinkText', this.innerText);

            console.log('Stored in localStorage:', this.id, this.getAttribute('href'), this.innerText);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var supportLink = document.querySelector('#support');

    supportLink.addEventListener('click', function(e) {
        e.preventDefault();

        localStorage.setItem('SignInUpPagelastClickedLinkId', this.id);
        localStorage.setItem('SignInUpPagelastClickedLinkHref', this.getAttribute('href'));
        localStorage.setItem('SignInUpPagelastClickedLinkText', this.innerText);

        console.log('Stored in localStorage:', this.id, this.getAttribute('href'), this.innerText);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var footerLinks = document.querySelectorAll('.footer .nav_a');

    footerLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if(this.getAttribute('href') === '#') {
                e.preventDefault();
            }

            localStorage.setItem('SignInUpPagelastClickedFooterLinkId', this.id);
            localStorage.setItem('SignInUpPagelastClickedFooterLinkHref', this.getAttribute('href'));
            localStorage.setItem('SignInUpPagelastClickedFooterLinkText', this.innerText);

            console.log('Stored in localStorage:', this.id, this.getAttribute('href'), this.innerText);
        });
    });
});

// Login and Sign up
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the signup process
    function handleSignup(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Collect signup form data
        var email = document.getElementById('eml2').value;
        var password = document.getElementById('password2').value;
        var confirmPassword = document.getElementById('confirm-password').value;

        // Simple validation example
        if(password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Example: Store the signup data (for demonstration purposes only)
        // In practice, this should be securely handled with a backend service
        var users = JSON.parse(localStorage.getItem('users') || '[]');
        var userExists = users.some(user => user.email === email);
        if(userExists) {
            alert("Email already registered.");
            return;
        }

        users.push({ email: email, password: password }); // Never store passwords in plaintext in production!
        localStorage.setItem('users', JSON.stringify(users));
        alert("Signup successful!");
    }

    // Function to handle the login process
    function handleLogin(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Collect login form data
        var email = document.getElementById('eml1').value;
        var password = document.getElementById('password1').value;

        // Example: Validate the login data
        var users = JSON.parse(localStorage.getItem('users') || '[]');
        var user = users.find(user => user.email === email && user.password === password);
        if(user) {
            alert("Login successful!");
        } else {
            alert("Login failed: Incorrect email or password.");
        }
    }

    // Attach event listeners to buttons
    var signupButton = document.getElementById('signup-button');
    var loginButton = document.getElementById('login');

    if(signupButton) {
        signupButton.addEventListener('click', handleSignup);
    }

    if(loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }

    // Optional: Handle the signup-link and login-link for toggling between forms
    var signupLink = document.getElementById('signup-link');
    var loginLink = document.getElementById('login-link');
    var loginForm = document.querySelector('.form.login');
    var signupForm = document.querySelector('.form.signup');

    if(signupLink) {
        signupLink.addEventListener('click', function(event) {
            event.preventDefault();
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        });
    }

    if(loginLink) {
        loginLink.addEventListener('click', function(event) {
            event.preventDefault();
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }
});
