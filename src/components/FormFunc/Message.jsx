import React from 'react';

export const Message = (props) => {
  return (
    <>
      <p>{props.message.author}</p>
      <p>{props.message.message}</p>
      <p>{props.message.time}</p>
    </>
  );
};
