import React , { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state={title: ''};
    this.setTitle = this.setTitle.bind(this)
  }

  //This ensures title defined by constructor props is not manipulating actual title defined in index.js file
  static getDerivedStateFromProps(props, state) {
    return {title: props.title};
  }

  setTitle(){
    this.setState({title: 'Updated title'});
  }

  render(){
  return (
    <div className="App">
      <h1>{this.state.title}</h1>
    </div>
  );
  }
}

export default App;
