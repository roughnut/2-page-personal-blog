// create variables for the form and the submit button
// get the form element
let formElement = document.querySelector(".blog-form");
//  get the username input element
let usernameInput = document.getElementById("username");
// get the title input element
let titleInput = document.getElementById("title");
// get the content input element
let contentInput = document.getElementById("content");

// add event listener to the form
formElement.addEventListener("submit", function(event) {
    // prevent the pesky default behaviour
    event.preventDefault();

    //   create an object to store the form values
  const blogPost = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

    //  create array to store the input and any existing blog posts
    let postsArray = [];

  //   check if there are any blog posts already in local storage
    if(localStorage.length > 0) {
        const exisitingPosts = JSON.parse(localStorage.getItem("blogPosts"));
        // add existing posts to  array
        postsArray = postsArray.concat(exisitingPosts);
    }

    // add the new blog post to the array
    postsArray.push(blogPost);

    // store the postsArray in local storage
    localStorage.setItem("blogPosts", JSON.stringify(postsArray));

    // redirect to the blog page
    window.location.href = "blog.html";
});