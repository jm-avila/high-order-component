## Higher-order Function

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

Higher-order functions allow us to abstract over actions, not just values.

Example:

```
function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

― Marijn Haverbeke , [Eloquent JavaScript: A Modern Introduction to Programming](https://eloquentjavascript.net/05_higher_order.html)

## Higher-order Component

A higher-order component (HOC) is an advanced technique in React for reusing component logic. Concretely, a higher-order component is a function that takes a component and returns a new component.

Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

HOCs are common in third-party React libraries, such as Redux’s connect.

― React Docs , https://reactjs.org/docs/higher-order-components.html

```
component => component
```

The Higher-order Component example used in the app comes from [What is a Higher Order Component? | React Tutorials
](https://www.youtube.com/watch?v=JZcKgeulFM0)
