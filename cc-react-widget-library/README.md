# cc-react-widget-library

## creating widget library

Widget library can be created easily with the help `create-react-library` CLI tool available in GIT (`https://github.com/transitive-bullshit/create-react-library`)

### Easy steps for creating

1.  Install the CLI tool from npm through `npm install -g create-react-library`.
2.  Now Inside the module application where you want to configure the widget library hit command `create-react-library`
3.  After that enter the module details like name and description etc. (only name is required.)
4.  This will install the library along with predefined structure.
5.  Now we can edit the src/ files and once we run `npm start` or `npm install` this will create `dist` folder and all the export from src/index.tsx get compiled and available in the `dist` folder which can be easily used in our application.

### Folder Architecture

```
|-- src
    |-- index.tsx - (root file for exporting all through barelling)
    |-- feature folder - (folder containng the feature defined and can be exported)
        |-- index.tsx - (file containing all export from feature folder)
    ...
    ...
```
