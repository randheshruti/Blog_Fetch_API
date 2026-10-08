// Select the container
const postsContainer = document.getElementById("posts-container");


// Fetch posts from JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/posts")

    // Convert response into JSON
    .then(response => response.json())

    // Get the posts
    .then(posts => {

        // Loop through posts
        posts.forEach(post => {

            // Create a div for each post
            const postElement = document.createElement("div");

            postElement.classList.add("post");

            // Add title and body
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;

            // Add post to the page
            postsContainer.appendChild(postElement);

        });

    })

    // Handle errors
    .catch(error => {

        postsContainer.innerHTML =
            "<p>Failed to load posts.</p>";

        console.error(error);

    });