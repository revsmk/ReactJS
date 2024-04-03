# Getting Started with Multi Step Form in React

For building our multi-step forms, we'll use a Stepper component that allows users to see all the steps and also allows them to click on each step to navigate between them if these are valid and do not have pending changes.

We will hold the state in a container component: switching pages will reset the state. If you'd like this to be global, you can opt for lifting the state or using a library such as Zustand.
State is passed down using the Context. 
Each step will have its own component. For example, the details step's form will be defined in the Steps component. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

