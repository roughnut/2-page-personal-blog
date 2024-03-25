# Bootcamp Challenge 04 - Web APIs - Personal Blog 

Coding bootcamp challenge to build a 2-page personal blog where users can input and view blog posts.

## Description

Challenge is to build a 2 page blogging website where users can submit posts, have them published on a different page, and have them persist in local storage.

[User Story](#user-story) and [Acceptance Criteria](#acceptance-criteria) are below.

Also included below is my [Process & Learnings](#process--learnings) section.

## Usage

[Github Pages URL]()

## User Story

```md
AS A marketing student,
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.
```

## Acceptance Criteria

```md
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.
```

## Process & Learnings

1. I had a bit of a look ahead to next week and found the web API, Bootstrap, so learned how to apply that API to assist with the structure and styling of the site.  Bootstrap comes from a CDN and needs to go in the `<head>` element of the page and also needs a `<script>` included before the closing `</body>` tag.  

```html
<!-- in the header -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- before the closing body tag -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
```

2.
