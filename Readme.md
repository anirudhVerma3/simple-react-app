# Simple React CI/CD App

A basic React application configured for a CI/CD pipeline demonstration.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint`

Lints the JavaScript/JSX files in the `src` directory.

### `npm test`

Launches the test runner in the interactive watch mode.\
It also generates a `junit.xml` file for CI systems.

### `npm run build` or `npm run build:prod`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Docker

To build the Docker image:
```bash
docker build -t simple-react-ci-cd-app .