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

  // This is to simply return true or false to determine whether the component should update if the state changes
  // It's default value is true
  shouldComponentUpdate(nextProps, nextState){
    return true;
    // Un Comment below and the component won't be updated
    // return false;
  }

// Even the following function doesn't work as title is held to stay static from getDerivedStateFromProps
  setTitle = () => {
    //console.log('Clicked');
    this.setState({title: 'Updated title'});
  }

  render(){
    let users = null;
    if(this.state.userData){
      users =  
      //this.state.userData;
    this.state.userData.map((user, i) => <div key={i}>{user.name} is from {user.address.city} city.</div>) 
    }
     else {
      users = <p>Loading...</p>;
    } 

  return (
    <div className="App">
      <h1>{this.state.title}</h1>
      {/* <button onClick={this.setTitle}>Change title</button> */}
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
