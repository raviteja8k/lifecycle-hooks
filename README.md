## This is used to practice and understand React Lifecycle hooks.

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
The three phases are: Mounting, Updating, and Unmounting.

### This example is about Updating

The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:
    getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()

## This isn't my code but a good example for reference.