import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data
        });
        console.log(res)
      })
      .catch(err => console.log('ERR', err))
  }

  addSmurf = (e, newSmurf) => {
    e.preventDefault()
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
        console.log(res)
        this.props.history.push('/')
      })
      .catch(err => console.log('ERR', err))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>smurf list</NavLink>
          <NavLink to='/smurf-form'>add smurf</NavLink>
        </nav>
        <Route exact path='/' render={() => <Smurfs smurfs={this.state.smurfs}/>} />
        <Route path='/smurf-form' render={() => <SmurfForm addSmurf={this.addSmurf}/>} />
      </div>
    );
  }
}

export default App;
