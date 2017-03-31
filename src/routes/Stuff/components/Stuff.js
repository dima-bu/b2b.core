import React from 'react';
import fluidable from './../../../styles/fluidable.less';


const Stuff = props => {
  const {loadGroups} = props;

  return (
    <div>
      <div className={fluidable.container}>

        <div className={fluidable['col-2']}>
          <h1>Stuff</h1>
        </div>
        
        <div className={fluidable['col-2']}>
          <button onClick={loadGroups}>loadGroups</button>
        </div>
      </div>
    </div>
  );
};

export default Stuff;
