import React from 'react';

const Smurf = props => {
  const id = props.match.params.id;
  const smurf = props.smurfs.find(smurf => smurf.id === parseInt(id))
  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

