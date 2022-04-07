# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Alerts service usage`

It provides three functions:

- <b>infoAlert</b>(infoTitle, infoToDisplay)<br/>
- <b>errorAlert</b>(errorTitle, errorDescription)<br/>
- <b>confirmAlert</b>(confirmQuestion, comment, actionOnConfirm)

<b>infoAlert</b> is invoked passing to it a title and a content to display,
and user can dismiss it by clicking the displayed button.

<b>errorAlert</b> is invoked passing to it a title and a description for the
error, and user can smiss it by clicking the displayed button.

<b>confirmAlert</b> is invoked passing to it a question to ask, a comment related
to the consequences around the question, and a callback function to be executed
if the user clicks the confirm button; otherwise it will take no action.
