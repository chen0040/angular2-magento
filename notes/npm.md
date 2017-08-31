Open a command prompt in the project's static directory

Type: 'rm -rf node_modules'

Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
Type: ` ./node_modules/.bin/typings install`
    This installs the typings if they are not installed.
    
Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.