# Dynamic Routes

We can pass dynamic values into the routes defined by react-router-dom configuration and use them into our rendered components.

## Syntax

```
{
    path:"restaurant/:resId",
    element: <Restaurant />
}
```

adding a ":" before any string makes it dynamic.

## Accessing the dynamic variables in route:

We can use **useParams** hook provided by react-router-dom, which gives us the object containing the values of all the dynamic variables used in route.

```
const Restaurant = () => {

    const {resId} = useParams();

    return (
        <>
            This is a Restaurant Page for ID - {resId} 
        </>
    )
}
```

in the above example the useParams hook will return the following - 

```
{
    resId:"someValue"
}
```

## general usecase of useParams

this params are available into our functional component. most common case is to have a details page of an item, let's say restaurant. We can show data of different restaurants on the same component. using the value from useParmas we can bring data for different restaurants based on the url.

`eg: path -> /restaurant/burger-king-12345` -> bring the data for the restaurant named burger king having id **12345**.