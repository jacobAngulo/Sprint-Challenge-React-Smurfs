import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.activeSmurf || {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  // addSmurf = event => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api
  //   if (
  //     this.state.smurf.name !== "" &&
  //     this.state.smurf.age !== "" &&
  //     this.state.smurf.height !== ""
  //   ) {
  //     this.props.addSmurf(event, this.state.smurf);
  //   }
  // };

  // updateSmurf = event => {
  //   event.preventDefault();
  //   if (
  //     this.state.smurf.name !== "" &&
  //     this.state.smurf.age !== "" &&
  //     this.state.smurf.height !== ""
  //   ) {
  //     this.props.addSmurf(event, this.state.smurf);
  //   }
  // };

  handleInputChange = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "age") {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }));
  };

  render() {
    return (
      <div className="SmurfForm">
        <form
          onSubmit={
            this.props.activeSmurf
              ? event => this.props.updateSmurf(event, this.state.smurf)
              : event => this.props.addSmurf(event, this.state.smurf)
          }
        >
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button
            onClick={
              this.props.activeSmurf
                ? event => this.props.updateSmurf(event, this.state.smurf)
                : event => this.props.addSmurf(event, this.state.smurf)
            }
            type="submit"
          >
            {this.props.activeSmurf ? "update smurf" : "add smurf to village"}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
