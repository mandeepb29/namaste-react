# Igniting our React App

We can create a create app using the npx command. 

```
npx init
```

this command initiate a react app.

While shipping a app to production, we need to make sure it is optimized. Using npx takes care of this optmization things. 

So when we build a react app using
```
npm build
```

these optimization things are taken care of by other tools. 

Optimization techniques include:

1. Code Splitting
2. Tree shaking
3. Image optmization
4. Removing comments
5. Image optmization

So, only react is not responsible for making our app fast. Other tools with React combines help us to achive a blazing fast, scalable, production ready app!

Tools that comes in react ecosystem

## 1. npm

NPM is a package repository that contains millions of packages for us to use and also manages them in our project.

To add it we can run

```
npm init
```

Running this command gives us a new file that is *package.json*. This is a config file that npm refers to manage our packages/dependencies and store metadata, script commands about the project.

## 2. Bundler

Bundlers are tools that help us to bundle our code. During bundling process they also minify the code, optimized it, etc. The features provided by bundlers depends but there main task is to bundle the code together so it work fast in production.

### Using parcel

```
npm install -d parcel
```

This command add the parcel to our project as dev dependency. This will do the following things:

1. Add the parcel as same into our package.json file.

Now the versions of package can contain this two symbols before them, ~ (tilde) and ^(carat)

- ~ -> if present, this will install the package with major updated version. eg. 2.7.8 , major update: 3.0.0
- ^ -> if present, this will install the package with minor updated version. eg. 2.7.8, minor update: 2.7.9

2. Create a package.lock.json file, if this is the first dependency added.

*Difference between package.json and package.lock.json is the content of it. While package.json contains the approximate versions of the dependencies, the lock file contains the exact version, runtime engine ,other details of the dependency and also the dependencies of the the dependency with their exact version, runtime engines, other details*

3. Node modules folder created - This folder contains the actual code of the dependency and it's dependencies and it's dependencies......

This chain of dependencies is called "Transitive Dependencies". Node modules contains all this files, and the logic to identify the transitive dependencies is to check the package.json files of each dependency.


### Running the parcel

We can run parcel using the npx command (Node Package eXecutable), which allow us to execute any package command without installing it and adding it into our package.json, which is the case while using npm.

```
npx parcel index.html
```

This will create a build of our code and host it on the localserver localhost://1234.

Things parcel do:
- Dev Build
- Creting Local Server
- Provides HMR - Hot Module Replacement using File Watching Algorithm (writeen in C++), tracks all the files and creates a new build when any changes is detected
- Caching - Gives faster subsequent builds
- Image Optimization
- Code Minification
- **Bundling**
- Compression
- Code Splitting
- Consistent Hashing
- Differential Bundling - supports older browser
- Diagnostics 
- Error Handling 
- Support HTTPs 
- Tree shaking - removing unused code
- Different dev and prod bundles (Prod build usually includes more steps to make code optimized)

> So, only react is not responsible for making our app fast. Other tools with React combines help us to achive a blazing fast, scalable, production ready app!

*These features of Parcel, contributes in giving us a fast app.*

## Adding react using npm

```
npm install react react-dom
```

This will do the same things as done with parcel, just one different thing, this both packages would be added as dependencies instead of dev dependencies. 

## Using React in our project. 

We need to import the react packages into our script file and convert our script file into a module file, as normal script file doesn't support import/export statements.

```
import React from "react";
import ReactDOM from "react-dom/client";

<script src="script.js" type="module" ></script>
```

This will make our project run after using react as a package. Now we will create a production build after doing couple of things.

## Building a production build

### Adding BrowsersList

We can add browsers will support our code, based on this parcel or any other bundler would execute the differntial bundling step.

- Add the browserslist list in package.json

```
"browserslist":[
    "last 2 versions"
  ]
```
### Adding the build related files to .gitignore.

 The logic to what we need to put in gitignore are the items that can be regenerated. This is because the scripts that generates these files like the ones for build and package installation can also be executed on the server that will host our app, due to the presence of environment like nodejs. 

## Conclusion

By doing this two steps we have created a production ready app with the same configurations which is available for an app created using CRA.














