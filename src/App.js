import React , { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state={title: '',
                userData: ''};
    this.setTitle = this.setTitle.bind(this)
  }

  //This ensures title defined by constructor props is not manipulating actual title defined in index.js file
  static getDerivedStateFromProps(props, state) {
    return {title: props.title};
  }

// Even the following function doesn't work as title is held to stay static from getDerivedStateFromProps
  setTitle = () => {
    this.setState({title: 'Updated title'});
  }

  render(){
    let users = null;
    if(this.state.userData){
      users =  
      //this.state.userData;
    this.state.userData.map((user, i) => <div key={i}>{user.name}  -{user.address.city}</div>) 
    }
     else {
      users = <p>Loading...</p>;
    } 

  return (
    <div className="App">
      <h1>{this.state.title}</h1>
      {users}
    </div>
  );
  }
 
  // Re-renders the component with data fetched from dummy API
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => 
       setTimeout(() => {
        this.setState({userData: json})
        }, 1000)          
    ) 

        
  }
    

}

export default App;
