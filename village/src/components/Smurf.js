import React from "react";

const Smurf = props => {
  const id = props.match.params.id;
  const smurf = props.smurfs.find(smurf => smurf.id === parseInt(id));
  if (!smurf) {
    return <p>wait</p>;
  } else {
    return (
      <div className="Smurf">
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
        <button onClick={e => props.handleUpdate(e, smurf)}>update</button>
        <button onClick={e => props.deleteSmurf(e, smurf.id)}>delete</button>
      </div>
    );
  }
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
