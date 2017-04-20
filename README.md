# FCC Backend API Project - Image Search Abstraction

## Objective

Build a full stack JavaScript app that allows you to search for images like this: https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10 and browse recent search queries like this: https://cryptic-ridge-9197.herokuapp.com/api/latest/imagesearch/. Then deploy it to Heroku.

Note that for each project, you should create a new GitHub repository and a new Heroku project. If you can't remember how to do this, revisit https://freecodecamp.com/challenges/get-set-for-our-api-development-projects.

Once you've finished implementing these user stories, click the "I've completed this challenge" button and enter the URLs for both your GitHub repository and your live app running on Heroku.

You can get feedback on your project by sharing it with your friends on Facebook.

### User Stories - FCC

1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

### User Stories - Stretch Goals

4. I want a polished user interface and to get experience using Reac.t

### Resources

- [Google Custom Search API](https://developers.google.com/custom-search/)

## Application Design

### Overview

Although the FCC user stories dictate that this challenge be implemented as
a simple API I've chosen to expand the scope to also include a more friendly 
user interface implemented in React to allow me to test my React skills. A
secondary benefit of this expanded scope is to provide an in-screen log of
the programs progress to assist in debugging core functionality.

### Screen Layout
---
![Screen Layout image](https://github.com/jdmedlock/imgabstract/blob/master/images/Image%20Search%20Abstraction.png "Screen Layout")

---

#### React Components

The React components that make up the application screen are:

- App
  - PageHeader
  - SearchTerm
  - SearchResults
  - PageFooter


