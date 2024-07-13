# Building our first react app

## Idea

We will build a food ordering app like swiggy and zomato. This will include some generic fetures as mentioned below:

- Search on food and restaurants
- Listing restaurants
- Cart
- Orders

## Planning our app

We will create a basic ui mockup of our app, to get an idea how our app will look. Based on this mockup we can plan our layout and components to be created for our app.


### **plan**

Header
- Logo
- NavLink
- Cart
Body
- Search 
- Restaurant List
- - Restaurant Card
- Food List
Footer
- CopyRight
- About
- Careers, etc

## Creating Components

Based on the above stucture we can create the components in the same hierarchy so the list of the actual function components will be:

- HeaderComponent
- BodyComponent
- FooterComponent

and all the child components that is listed above.

## Props 

Props are the dynamic data to Functional Components. Taking the analogy about of Functional Components as Arrow Functions, Prop are arguments to a function, that can be used in JSX inside Functional Component.

```
const ResCard = (props) => {
    return <>
        <p>{props.name}</p>
    </>
}


<ResCard name="Mandeep Ka Dhaba" />
```

In the above example, we are passing name as a prop, which is accessible by props object in the components. 

We can also use object destructuring syntax to access the properties in props object, as shown below - 

```
const ResCard = ({name}) => {
    return <>
        <p>{name}</p>
    </>
}

<ResCard name="Mandeep Ka Dhaba" />

Props make the component reusable.
```

### Out of context facts:

**Config Driven UI** - This type of UI is controlled by the data. The data not only contains the content shown on the UI, but also the data deciding how that UI is shown. To achieve this we need to code our UI accordingly, which changes based on data.

## Looping in JSX:

 We can use loops in JSX, one appication of which is showing same component multiple times with different data.

 ```
 list.map((item) => 
 (<ResuableComponent name={item} />)
 );
 ```
  