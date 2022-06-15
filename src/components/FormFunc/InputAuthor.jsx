import React, { useState } from 'react';

export const InputAuthor = (props) => {
  return (
    <>
      <input
        type="text"
        value={props.author}
        placeholder="Твое имя"
        onChange={props.change}
      />
    </>
  );
};
