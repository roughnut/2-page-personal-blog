// go back to index button
const backButton = document.getElementById("goBack");
backButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
    });

// create elements for the blog posts taken from local storage

// set the blog container
let blogMain = document.getElementById("blog-container");

// need to create elements to append to the blog container
// create a section element for each blog post
let blogSection = document.createElement("section");
// create an h2 element for the blog title
let blogTitle = document.createElement("h2");
// create a p element for the blog content
let blogContent = document.createElement("p");
// create a p element for the author name
let blogAuthor = document.createElement("p");

// get the blog posts from local storage
const blogPosts = JSON.parse(localStorage.getItem("blogPosts"));


