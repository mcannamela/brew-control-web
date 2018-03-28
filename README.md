# Brew Control Web

Legally distinct from brew-control. We aspire to control our brewery from the web and learn to build a modern
web app in the process.

## Features

* Fully responsive design down to 320px.
* Production config with minimized assets
* I18n support that can be extended at anytime. See `app/i18n/translations.js`
 for translation file format.
* Development mode features file watching and hot reloading of assets.
* Webpack handles bundling of all static assets including image assets
* Unit test coverage using Jest.
* Enzyme provides useful utilities for testing React components without the need for a DOM.
* Unit test coverage reports that could be ingested by Sonarqube or other CI tools.
* Unit test coverage thresholds that will fail the test run.
* Eslint file set to a standard guide for static code analysis.

## Development

### Requirements

* Node 6.9.4 (Tested)

### Running The Application

Run the following commands

`npm install`
`npm run build`
`npm run start:prod`

Open a web browser to http://localhost:3000/

### Useful commands

* `npm start`: Starts the server in development mode, which takes advantage of Webpacks hot reloading middleware.
* `npm test`: Will run all unit tests and generate coverage reports.
* `npm run test:watch`: Will run the test suites on code changes.
* `npm build`: Will generate the production build of the site.
* `npm run start:prod`: Will run the site in production mode. *Note* `build` must be run first.

### App Layout

The app is organized by the following classifications:

* `pages`: The top level React component for a route.
* `components`: Reusable React components that can be used on multiple pages. Each component has a directory that contains its files and test directory.
* `assets`: Assets are broken down by type (image, svg, font, sass) and then some asset types are broken down again by the component or page that they support.
* `server`: Files that support Express and the backend of the project

For example:

```
- app
  |- assets
     |- sass
        |-components
          |-A.scss
  |- components
     |-A
       |-tests
         |-ducks.test.js
       |-index.js
       |-ducks.js

```

## Technologies

### Tooling

* Webpack
* Eslint
* Jest
* Enzyme

### Frontend

* React
* Redux
* React-Router
* Redux-thunk
* React-Redux-i18n
* react-flexboxgrid

### Backend

* Express

## Browser Testing

* IE Edge
* Chrome Version 63.0.3239.132

## Known Issues

* In development mode the app must be launched from `/`. This appears to be a side effect of how the react hot middleware handles the initial request.


## References

To bootstrap this project I took the starting point of a few different boiler
plates and cherry-picked what I deemed to be relevant to this take home
assignment.

* https://github.com/christianalfoni/webpack-express-boilerplate
* Redux organizational style: https://github.com/erikras/ducks-modular-redux

## Notes

* I noticed that the PNG mock ups of the page differed slightly from the `.sketch` file. When there was a discrepancy I went with the `.sketch` file.
* This demo has not been optimized to work with older browsers.
