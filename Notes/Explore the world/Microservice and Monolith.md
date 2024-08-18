# Microservices vs Monolith Architecture

## Monolith Architecture

This is a old type of architecture, in which all the features of an application is developed in single code repository. 

### Advantages:
This used to be followed earlier because of being more intuitive. It was easier to manage and debug as all the code was present at once place which also gave us less cost in deployment as we only need one deployment pipelines. Good for small teams, where one repository is enough to handle all application code.

### Disadvantages:
Hard for large teams to collaborate due to heavy dependencies between various parts of application because of common codebase.
Need to follow same stack for whole application.
Increased dependencies between different parts of application.

## Microservice Architecture

This is new type of architecture, usually followed nowadays by large companies. In this type we develop different parts of application as seperate, independent microservice. A microservice is responsible for one feature of the complete application and different microservices generally interact with APIs with each other.

### Advantages:
No dependencies between different features of the application. Each can be developed seperately and have it's own deployment cycle.
Can use different tech stack of different services, and provide a common interface like an API endpoint to interact.
Good for large teams to work, as each team can work independently on their own microservice.

### Disadvantages:
More cost, as each microservices needs it's own depployment pipeline and hosting, which increases infra and developers's costs
Not suitable for small teams, as it increases managerial overhead, which is unnesscary complications in management of microservices.
Hard to plan the microservices development and deployment strategies.

## Examples:

Consider an app being developed in microservice and monolith architecture:

We have different modules of application like UI, backend APIs, SMS services, DB and infra services like backup and health checks of resources.

In monolith, these all will be present in same code base, and same stack like .NET. They will have a common deployment pipeline, same git repo, all the teams working on same code base.

In microservice, we can have different services for UI, backend APIs, DB operations, SMS. They can have there different deployment cycles/pipelines if needed, and can be developed on different tech stacks like, UI in VueJS, backend api on .net, SMS service on Golang, having different git repositories. And we can have dedicated teams working on these microservices.

