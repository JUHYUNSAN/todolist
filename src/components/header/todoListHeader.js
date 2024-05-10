import React from "react";

export const TodoListHeader = () => {
  //full date 
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fullDate = currentDate.toLocaleDateString('en-US', options);

  return <div>
    <p> today is..</p>
    <h3> {fullDate} </h3>
  </div>;
};