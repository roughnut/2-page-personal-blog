// go back to index button
const backButton = document.getElementById("goBack");
backButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
    });

// create elements for the blog posts taken from local storage

// set the blog container
let blogMain = document.getElementById("blog-container");


// create a section element for each blog post and style the container
function getBlogSection() {
    blogSection = document.createElement("section");
    blogSection.className = "d-flex flex-column align-items-left border rounded px-3 m-3 pt-3";
    return blogSection;
}

// create a heading element for the blog title
function getBlogTitle() {
    blogTitle = document.createElement("h3");
    return blogTitle;
}

// create a paragraph element for the blog content
function getBlogContent() {
    blogContent = document.createElement("p");
    return blogContent;
}

// create an element for the blog author
function getBlogAuthor() {
    blogAuthor = document.createElement("p");
    return blogAuthor;
}


// get the blog posts from local storage
function getBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
    return blogPosts;
}

// publish the blog posts to the page
function publishBlogPosts(blogPosts) {
    for (let i = 0; i < blogPosts.length; i++) {

        const blogSection = getBlogSection();
        
        const blogTitle = getBlogTitle();
        blogTitle.textContent = blogPosts[i].title;
        blogSection.appendChild(blogTitle);

        const blogContent = getBlogContent();
        blogContent.textContent = blogPosts[i].content;
        blogSection.appendChild(blogContent);

        const blogAuthor = getBlogAuthor();
        blogAuthor.textContent = `By: ${blogPosts[i].author}`;
        blogSection.appendChild(blogAuthor);
        blogMain.appendChild(blogSection);

    }
}

// check if blogs exist in local storage, remove the emptyList message, get the blog posts
if (localStorage.getItem("blogPosts") !== null) {
    document.getElementById("emptyList").remove();
    const blogPosts = getBlogPosts();
    publishBlogPosts(blogPosts);
}



