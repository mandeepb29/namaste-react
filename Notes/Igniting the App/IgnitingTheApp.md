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

*Now the versions of package can contain this two symbols before them, ~ (tilde) and ^(carat)

- ~ -> if present, this will install the package with major updated version. eg. 2.7.8 , major update: 3.0.0
- ^ -> if present, this will install the package with minor updated version. eg. 2.7.8, minor update: 2.7.9*

2. Create a package.lock.json file, if this is the first dependency added.

*Difference between package.json and package.lock.json is the content of it. While package.json contains the approximate versions of the dependencies, the lock file contains the exact version, runtime engine ,other details of the dependency and also the dependencies of the the dependency with their exact version, runtime engines, other details*

3. Node modules folder created - This folder contains the actual code of the dependency and it's dependencies and it's dependencies......

This chain of dependencies is called "Transitive Dependencies". Node modules contains all this files, and the logic to identify the transitive dependencies is to check the package.json files of each dependency.




### Transitive Dependencies







