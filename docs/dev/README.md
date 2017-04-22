## Description

The static files inside `/dist` are generated by webpack using Uglify and 
Treeshaking to optimize them as much as possible. The project is made with React 
and Redux, while Babel is used to transplile the code for the latest browsers 
version. Axios is used for the POST requests.

An explanation of the app itself can be found below under *Requirements*.

The whole webapp is built on the front-end, the `server.js` file is just to 
deploy on Heroku using node, the entire project is made in a way that it can use whatever back-end language or technology that can serve static files.

The project is live at tbd.

## Folder structure

- *application root directory*
  - *.eslintrc*
  - *.gitignore*
  - *package.json*
  - *README.md* documentation for the application. This should be an overview
  of the applications purpose and basic information. Links should be included
  to the */docs/user/README.md* and */docs/dev/README.md* files, which will
  contain more detailed documentation. Developers should not hesitate from 
  using multiple documentation files for both development and user documentation
  as deemed appropriate.
  - *webpack.config.js* contains the Webpack configuration settings controlling
  the bundling of the application.
- */dist* Has our production ready files generated by Webpack
  - *index.html* entry point
  - *index.js* everything from */src*
- */docs* Contains documentation relevant for users of the application as well
as for developers responsible for maintaining it.
  - */dev* This directory contains documentation for developers who are
  responsible for creating and/or maintaining the application.
  - */shared* Contains files used for both developer and user documentation. 
  This will mainly be images (such as screenshots), but it could also be files
  containing information such as tables and diagrams.
  - */user* This directory contains documentation for the users who will be
  utilizing the application.
- */src*
  - */client*
    - *App.jsx* base container where state is called and modified (source of 
    truth) before getting passed to stateless components in a parent -> children relationship
    - *index.html* base file for single page app
    - *index.jsx* entry React point, here hotmodule and store are set and scss 
    is integrated 
    - */actions* Contains Redux actions
    - */containers* Contains the React stateful components. 
      - *favicon.ico*
      - *style.css*
      - *style.styl*
      - */pages* Components are organized into one subdirectory for each page 
      in the application.
        - */page-name*
        - */shared*
    - */reducers* This directory contains the Redux cases
  - */server*
    - *server.js* entry point for node
    - */config*
    - */models* Contains files such as Mongoose schemas
    - */services* This directory will contain the `.js` files which accept
    and process API requests.
- */tests*
  - *dom.js*
  - *helpers.js*
  - *index.js*

## Install

You must have npm installed in your local machine, node comes with npm so if you want you can install it from [Node official website](https://nodejs.org/en/).

clone the repo on your local machine thru the command line.

`git clone https://github.com/Kornil/i2x-challenge`

and then run `npm i` to install all the dependencies needed to run this project.

after that if you use a *linux OS* modify this script inside `package.json` and run `npm test`, then you can visit _localhost:8080_ on your browser to see the project.

```
"scripts": {
    "test": "NODE_ENV=development webpack-dev-server",
```

if otherwise you are using *mac OS* or a *windows OS* just open `package.json` on your editor and verify the start script matches as follows before running `npm test` to see the website on _localhost:8080_.

```
"scripts": {
    "test": "set NODE_ENV=development & webpack-dev-server",
```


## Deploy

Before deploying on Heroku make sure to run `npm run build` and test it with `npm start` to check that everything is working as intended.
To deploy on Heroku, simply create a new project on the website, link this repository under the "deploy" tab and you're done.