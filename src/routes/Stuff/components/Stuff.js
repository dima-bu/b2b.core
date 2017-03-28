import React from 'react';

const Stuff = props => {
  const {loadGroups} = props;

  return (
    <div>
     <h1>Stuff</h1>
      <button onClick={loadGroups}>loadGroups</button>
    </div>
  );
};

export default Stuff;
