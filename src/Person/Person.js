import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className='Person'>
      <div onClick={props.click}> Click </div>
      <h1> I'm {props.name} . I'm {props.age}.</h1>
      <p>{props.children}</p>
      <input onChange={props.change} type="text"/>
    </div>
  )
}

export default person;
