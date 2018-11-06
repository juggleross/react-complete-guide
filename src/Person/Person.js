import React from 'react';

const person = (props) => {
  return (
    <div>
      <div onClick={props.click}> Click </div>
      <h1> I'm {props.name} . I'm {props.age}.</h1>
      <p>{props.children}</p>
    </div>
  )
}

export default person;
