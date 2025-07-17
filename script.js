// DOM Elements
const loginForm = document.getElementById('loginForm');

// Event Listeners
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (email && password) {
            // In a real app, you would send this to your backend
            console.log('Login attempt with:', email, password);
            
            // Redirect to dashboard (simulated)
            window.location.href = 'dashboard.html';
        } else {
            alert('Please fill in all fields');
        }
    });
}

// Shared Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UGX'
    }).format(amount);
}

// Simulated user data
const currentUser = {
    email: 'user@example.com',
    phone: '+256 7XX XXX XXX',
    balance: 0,
    vipLevel: 'None',
    transactions: []
};

// Update dashboard with user data
function updateDashboard() {
    if (document.getElementById('user-email')) {
        document.getElementById('user-email').textContent = currentUser.email;
        document.getElementById('user-phone').textContent = currentUser.phone;
        document.getElementById('total-earnings').textContent = formatCurrency(currentUser.balance);
        document.getElementById('vip-level').textContent = currentUser.vipLevel;
    }
}

// Initialize dashboard on load
document.addEventListener('DOMContentLoaded', function() {
    updateDashboard();
    
    // Add logout functionality to all pages
    const logoutButtons = document.querySelectorAll('.logout-btn');
    logoutButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    });
});