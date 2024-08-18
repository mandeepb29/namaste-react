# react life cycle methods

## mounting phase

1. constructor
2. getDerivedStateFromProps
3. Render
4. ComponentDidMount

## update phase

1. getDerivedStateFromProps
2. shouldComponentUpdate
3. getsnapshotbeforeupdate
4. render
5. componentdidupdate

## unmountingphase
 1. componentwillupdate

 ## states and props

 State is a internal variable, used inside a component, it can be modified, and whenever that happens the component is rerendered. 
 State can be passed to a children as a prop

 Prop is a read only variable, that is passed to the component from it's parent. Whenever state changes in parent, it's children are also rerendered to show updated props values.

 ## client side and server side rendering

In case of JS Frameworks and libraries, generally we have a javascript code that generates the html page that needs to be rendered. 
When this html page is created on server and returned to client than this is called server side rendering. The onl work that client here needs to do is render the html page

When this html page is created on the client dynamically, then it is called CSR. Client only gets the JS code and generates the html code.

Benefit of SSR is the first paint is very fast, as client only does rendering, in CSR it may take time, depending on code.

### Use

SSR is used where SEO is required, as SEO is based on content of the page, which comes ready when SSR is used.
It is also used when we need to develop content heavy websites like ecommerce site, news media site.

CSR is used when SEO is not important, like for personal use apps like email, messaging apps,
Also used where content updation is required very frequently, as in SSR this will result in frequent server calls.

## Synthetic events

React have it's own events APIs to standardlized the code to handle events in different browser. So when handling events we are interacting with react events which then converse this changes to actual browser events. 

This middleware implementation of browser events by React is known as Synthetic Events.