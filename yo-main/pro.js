document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');

    userForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;

        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        })
        .then(response => response.json())
        .then(data => {
            const userItem = document.createElement('div');
            userItem.textContent = `Username: ${data.username}`;
            userList.appendChild(userItem);
        })
        .catch(error => console.error('Error:', error));
    });

    fetch('/api/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const userItem = document.createElement('div');
            userItem.textContent = `Username: ${user.username}`;
            userList.appendChild(userItem);
        });
    })
    .catch(error => console.error('Error:', error));
});
