## This is used to practice and understand React Lifecycle hooks.

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
The three phases are: Mounting, Updating, and Unmounting.

### Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:
    constructor()
    getDerivedStateFromProps()
    render()
    componentDidMount()

### Updating

The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:
    getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()

### Unmounting

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:
    componentWillUnmount()

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/