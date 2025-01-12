import React from 'react';

function List({ list }) {
  return (
    <ul>
      {list.map((skill) => (
        <li className='stack_list'>{skill}</li>
      ))}
    </ul>
  );
}

export default List;
