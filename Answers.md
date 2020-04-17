1. What problem does the context API help solve?

    Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    store conatains state for our application, action contains action types to get yout application working and once thats called, the reducers get activated and do their job


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    application is global, use app for bigger project


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    its a middleware for our application so that if your doing something like a get request it skips over a step and not crash the app


1. What is your favorite state management system you've learned and this sprint? Please explain why!

        redux, because i just learned it, spent probabaly 15 hours a day the last week trying to understand so its fresh