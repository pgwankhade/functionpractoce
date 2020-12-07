import React from 'react';


const Robots = ({ robo }) => {
  return (
    <div>
      {
        robo.map((user, i) => {
          return (
           <h1>{user.name}</h1>
          );
        })
      }
    </div>
  );
}

export default Robots;