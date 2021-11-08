# Calculator - Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

For checking the development in storybook run the following command `npm run storybook`

### Development procedures

Requirement for this test from the client was to have a calculator build in React, with a specific rotate functionality in order to swap the last position of the character
in the string. 

#### Arquitecture
We have considered, or prepared, this application to be developed in three layers: 
- The Data Access Layer: here we don't have any connection to an API rest or messages for a data source, but we have considered it for further implementations. We have
called the data access layer gateaways. 
- The domain, or business logic: in this case we have implemented the redux state container for separating this logic from the renderic logic. In order to manage all the states. 
- The rendering logic: is basically the render process, that is implemented in the calculator tsx files itself. In this case, there no much logic in the rendering but it's important to keep in mind that the application, in order to keep the readability and scalability, should be separated in different and small components, keeping them in a very modular way. 

### Notations
- For the purposes of this test, we have used the window.Function() property instead of eval: the Function() object has less vulnerabilities than eval, but it's still not complete secure. It's 
better to implement a respective class with all the operations we can have, and this class could be extendible for new implementations, for example, a scientific calculator. If not a class, and 
a more declarative implementation is required, we can have an approach more focused in Functional Programming (instead of inheritance) but doing the respective operations without the usage of eval or the Function, and just using the operators by ordering it's priority in the string. 
- Implemented with Storybook for demonstration purposes. 

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
