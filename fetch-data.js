// Async function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        
        // Clear loading message
        dataContainer.innerHTML = '';
        dataContainer.className = '';
        
        // Create list element
        const userList = document.createElement('ul');
        userList.id = 'user-list';
        
        // Add each user to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append list to container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle errors
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
        dataContainer.className = 'error';
    }
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);