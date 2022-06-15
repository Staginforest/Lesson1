import React, { useState } from 'react';

export const Input = (props) => {
  return (
    <>
      <input
        type="text"
        value={props.message}
        placeholder="Пиши текст, тут"
        onChange={props.change}
        style={{ marginRight: '20px' }}
      />
    </>
  );
};
